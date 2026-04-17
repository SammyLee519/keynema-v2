export default function PageContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="px-[-100px]">{children}</div>
}
