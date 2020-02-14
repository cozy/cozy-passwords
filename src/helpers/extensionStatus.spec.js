import { useExtensionStatus, extensionStatuses } from './extensionStatus'
import { renderHook, act } from '@testing-library/react-hooks'
import { useFlag } from 'cozy-flags'

jest.mock('cozy-flags')

const triggerExtensionEvent = type => {
  const event = new Event(type)
  document.dispatchEvent(event)
}

describe('useExtensionStatus', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.spyOn(document, 'dispatchEvent')
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should ask the extension to check its status', () => {
    const { result } = renderHook(() => useExtensionStatus())

    expect(result.current).toBe(extensionStatuses.notInstalled)
    expect(document.dispatchEvent).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(1000)
    expect(document.dispatchEvent).toHaveBeenCalledTimes(2)

    act(() => {
      triggerExtensionEvent('extensioninstalled')
    })

    expect(result.current).toBe(extensionStatuses.installed)

    act(() => {
      triggerExtensionEvent('extensionconnected')
    })

    expect(result.current).toBe(extensionStatuses.connected)
  })

  describe('when the extension-check-disabled flag is enabled', () => {
    beforeEach(() => {
      useFlag.mockReturnValue(true)
    })

    it('should not send messages and tell the extension is not installed', () => {
      const { result } = renderHook(() => useExtensionStatus())

      expect(result.current).toBe(extensionStatuses.notInstalled)
      expect(document.dispatchEvent).not.toHaveBeenCalled()
    })
  })
})
