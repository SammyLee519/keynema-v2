import { Button } from '@/components'

export default function DevPage() {
  return (
    <div className="flex flex-col gap-8 p-10">
      <section className="flex flex-col gap-3">
        <h2>Button variants</h2>
        <div className="flex gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="text">더보기</Button>
          <Button variant="pill" data-active="true">
            액션
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Button sizes</h2>
        <div className="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2>Button states</h2>
        <div className="flex gap-3">
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>
      </section>
    </div>
  )
}
