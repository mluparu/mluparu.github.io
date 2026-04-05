declare module 'visualizer' {
    import type { DefineComponent } from 'vue';

    export type ThemeName = 'midnight' | 'light' | 'ocean' | 'forest' | 'sunset';
    export type PlaybackMode = 'preview' | 'reveal';
    export type ViewportMode = 'fit' | 'follow';

    export interface VisualizerEmbedProps {
        jsonlPath?: string;
        jsonlText?: string;
        fileLabel?: string;
        theme?: ThemeName;
        defaultMode?: PlaybackMode;
        viewportMode?: ViewportMode;
        followSmoothing?: number;
        autoplayWhenVisible?: boolean;
        height?: string;
        showChrome?: boolean;
        showThemePicker?: boolean;
        showCloseButton?: boolean;
    }

    export type VisualizationEmbedProps = VisualizerEmbedProps;
    export type TaskVizEmbedProps = VisualizerEmbedProps;

    export const VisualizerEmbed: DefineComponent<VisualizerEmbedProps>;
    export const VisualizationEmbed: DefineComponent<VisualizerEmbedProps>;
    export const TaskVizEmbed: DefineComponent<VisualizerEmbedProps>;
}
