import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

// Додаємо можливість приймати мову (locale)
export async function Header({ locale = 'uk' }: { locale?: 'uk' | 'en' }) {
  // Передаємо locale у функцію отримання даних
  // Другий параметр (1) — це глибина запиту (depth)
  const headerData = await getCachedGlobal('header', 1)(locale)

  return <HeaderClient data={headerData} />
}