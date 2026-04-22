import { toast } from 'sonner'

import { Toast } from '@/components'

export const showToast = {
  success: (message: string) =>
    toast.custom(() => <Toast message={message} variant="success" />),
  error: (message: string) =>
    toast.custom(() => <Toast message={message} variant="error" />),
  info: (message: string) =>
    toast.custom(() => <Toast message={message} variant="info" />),
}
