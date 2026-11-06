import { createFileRoute } from '@tanstack/react-router'
import { AdminOverview } from '@/features/overview'

export const Route = createFileRoute('/_authenticated/')({
  component: AdminOverview,
})
