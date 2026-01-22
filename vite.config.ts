import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import svgr from 'vite-plugin-svgr'
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [
        // tailwindcss(),
        // Enables Vite to resolve imports using path aliases.
        tsconfigPaths(),
        svgr({
            include: '**/*.svg',
            svgrOptions: {
                exportType: 'default',
            },
        }),
        vanillaExtractPlugin(),
        tanstackStart({
            srcDirectory: 'src', // This is the default
            router: {
                // Specifies the directory TanStack Router uses for your routes.
                routesDirectory: 'app', // Defaults to "routes", relative to srcDirectory
                routeFileIgnorePattern: '.*(_components|components|_feature|fonts).*',
            },
        }),
        viteReact(),
    ],
})