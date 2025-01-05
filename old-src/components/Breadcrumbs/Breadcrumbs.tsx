'use client'
import * as React from 'react'
import {
  Breadcrumbs as BreadcrumbsBase,
  BreadcrumbItem,
} from '@nextui-org/breadcrumbs'

export interface BreadcrumbsProps {
  items: {
    label: string
    href: string
  }[]
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <BreadcrumbsBase size="lg" className="mb-2">
      {props.items.map((item, i) => (
        <BreadcrumbItem key={i} href={item.href}>
          {item.label}
        </BreadcrumbItem>
      ))}
    </BreadcrumbsBase>
  )
}
