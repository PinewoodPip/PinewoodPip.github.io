
import type { Component } from "vue"

export { }

declare global {
  type integer = number
  /** ISO 8601 date */
  type dateISOString = string
  type base64String = string
  /** Slash-delimited resource path, with a leading slash. */
  type path = string
  /** Prefixed with a dot. */
  type fileExtension = string
  /** Nuxt icon identifier. */
  type icon = string

  type DynamicComponentDef = {
    component: Component | string,
    props: object,
  }

  type Project = {
    name: string
    /* Fallback description if the vue slot isn't set. */
    description?: string
    main_link: string
    images: path[]
    bullet_points: string[]
    skills: string[]
    links: {url: path, name: string}[]
  }
}
