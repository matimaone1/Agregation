<script setup lang="ts">
import { siteMeta } from '~/site/meta'
import type { Lesson } from '~/types'
import LessonCard from '~/components/Cards/LessonCard.vue'

const queryLessons = () => queryContent<Lesson>('latex', 'lecons')
  .sort({ slug: 1 })
  .without(['body'])
  .find()

const route = useRoute()
const { error, pending, data: lessons } = useLazyAsyncData(route.path, queryLessons)

const path = removeTrailingSlashIfPossible(route.path)
usePdfBanner(`/pdf${path}.pdf`)
useWipBanner(`https://github.com/${siteMeta.github.username}/${siteMeta.github.repository}/tree/master/latex${path}`)
</script>

<template>
  <div v-if="pending">
    <spinner />
  </div>
  <div v-else-if="lessons">
    <page-head title="Liste des leçons" />
    <h1>Liste des leçons</h1>
    <cards :items="lessons" :search-fields="['slug', 'name']">
      <template #default="slotProps">
        <lesson-card :lesson="slotProps.item" />
      </template>
    </cards>
  </div>
  <div v-else>
    <error-display :error="error" />
  </div>
</template>
