import { useExtensionStatus, extensionStatuses } from './extensionStatus'
import { renderHook, act } from '@testing-library/react-hooks'
import { useFlag } from 'cozy-flags'

jest.mock('cozy-flags')

const sendMessageFromExtension = () => {
  const event = new Event('message')
  event.data = {
    message: {
      source: 'cozy-extension'
    }
  }

  window.dispatchEvent(event)
}

describe('useExtensionStatus', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.spyOn(window, 'postMessage').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should send messages to the extension until it receives a message indicating that the extension is installed', () => {
    const { result } = renderHook(() => useExtensionStatus())

    expect(result.current).toBe(extensionStatuses.notInstalled)
    expect(window.postMessage).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(1000)
    expect(window.postMessage).toHaveBeenCalledTimes(2)

    act(() => {
      sendMessageFromExtension()
    })

    expect(result.current).toBe(extensionStatuses.installed)

    jest.advanceTimersByTime(1000)
    expect(window.postMessage).toHaveBeenCalledTimes(2)
  })

  describe('when the extension-check-disabled flag is enabled', () => {
    beforeEach(() => {
      useFlag.mockReturnValue(true)
    })

    it('should not send messages and tell the extension is not installed', () => {
      const { result } = renderHook(() => useExtensionStatus())

      expect(result.current).toBe(extensionStatuses.notInstalled)
      expect(window.postMessage).not.toHaveBeenCalled()
    })
  })
})
