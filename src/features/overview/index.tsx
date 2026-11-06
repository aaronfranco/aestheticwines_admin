import { FileText, Image, Wine } from 'lucide-react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

const areas = [
  {
    title: 'Site content',
    description: 'Pages, stories, navigation, and site details.',
    icon: FileText,
  },
  {
    title: 'Wine catalog',
    description: 'Wines, vintages, tasting notes, and product imagery.',
    icon: Wine,
  },
  {
    title: 'Media library',
    description: 'Images and video for your content.',
    icon: Image,
  },
]

export function AdminOverview() {
  return (
    <>
      <Header>
        <Search placeholder='Find a page' />
        <div className='ms-auto'>
          <ThemeSwitch />
        </div>
      </Header>
      <Main>
        <div className='mb-8 space-y-2'>
          <p className='text-sm font-medium text-muted-foreground'>
            Aesthetic Wines
          </p>
          <h1 className='text-3xl font-bold tracking-tight'>
            Content overview
          </h1>
          <p className='max-w-2xl text-muted-foreground'>
            A simpler workspace for managing your website content.
          </p>
        </div>
        <section
          aria-labelledby='workspace-status'
          className='mb-6 rounded-lg border bg-muted/30 p-5'
        >
          <h2 id='workspace-status' className='font-semibold'>
            Your admin workspace is ready
          </h2>
          <p className='mt-2 max-w-2xl text-sm text-muted-foreground'>
            Content editing and publishing are coming next. This workspace is
            not connected to the live website. Explore the template examples in
            the sidebar to review the tables, forms, and layouts available.
          </p>
        </section>
        <section
          aria-label='Planned content areas'
          className='grid gap-4 md:grid-cols-3'
        >
          {areas.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <CardHeader>
                <Icon
                  aria-hidden='true'
                  className='mb-3 size-5 text-muted-foreground'
                />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <p className='pt-3 text-xs text-muted-foreground'>
                  Not connected
                </p>
              </CardHeader>
            </Card>
          ))}
        </section>
      </Main>
    </>
  )
}
