import type { CollectionConfig } from 'payload/types'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true, // ВМИКАЄМО ПЕРЕКЛАД ДЛЯ ЦЬОГО ПОЛЯ
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true, // І ДЛЯ ЦЬОГО ТЕЖ
    },
    {
      name: 'link',
      type: 'text',
      // А от посилання, наприклад, однакове для всіх мов, тому сюди localized не додаємо
    }
  ],
}