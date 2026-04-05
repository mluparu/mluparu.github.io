<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { VisualizerEmbed, type PlaybackMode, type ThemeName, type ViewportMode } from 'visualizer'

interface Props {
  jsonlPath?: string
  jsonlText?: string
  theme?: ThemeName
  defaultMode?: PlaybackMode
  viewportMode?: ViewportMode
  followSmoothing?: number
  autoplayWhenVisible?: boolean
  height?: string
  showChrome?: boolean
  showThemePicker?: boolean
  showCloseButton?: boolean
  fileLabel?: string
  syncWithSiteTheme?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'midnight',
  defaultMode: 'preview',
  viewportMode: 'fit',
  followSmoothing: 0.1,
  autoplayWhenVisible: false,
  height: '720px',
  showChrome: true,
  showThemePicker: false,
  showCloseButton: false,
  syncWithSiteTheme: true,
})

const siteTheme = ref<ThemeName>('midnight')
let themeObserver: MutationObserver | null = null

function resolveSiteTheme(): ThemeName {
  if (typeof document === 'undefined') return 'midnight'
  return document.documentElement.classList.contains('dark') ? 'midnight' : 'light'
}

function syncSiteTheme() {
  siteTheme.value = resolveSiteTheme()
}

const effectiveTheme = computed<ThemeName>(() => (props.syncWithSiteTheme ? siteTheme.value : props.theme))

onMounted(() => {
  syncSiteTheme()

  if (typeof MutationObserver !== 'undefined') {
    themeObserver = new MutationObserver(() => {
      syncSiteTheme()
    })

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  }

  document.addEventListener('astro:after-swap', syncSiteTheme)
})

onBeforeUnmount(() => {
  themeObserver?.disconnect()
  document.removeEventListener('astro:after-swap', syncSiteTheme)
})
</script>

<template>
  <VisualizerEmbed
    :jsonlPath="jsonlPath"
    :jsonlText="jsonlText"
    :theme="effectiveTheme"
    :defaultMode="defaultMode"
    :viewportMode="viewportMode"
    :followSmoothing="followSmoothing"
    :autoplayWhenVisible="autoplayWhenVisible"
    :height="height"
    :showChrome="showChrome"
    :showThemePicker="showThemePicker"
    :showCloseButton="showCloseButton"
    :fileLabel="fileLabel"
  />
</template>
