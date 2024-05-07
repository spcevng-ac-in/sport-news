// vite.config.ts
import { defineConfig } from "file:///E:/COLLEGE/AICTE%20LITE/WD301/sport-news/node_modules/vite/dist/node/index.js";
import react from "file:///E:/COLLEGE/AICTE%20LITE/WD301/sport-news/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///E:/COLLEGE/AICTE%20LITE/WD301/sport-news/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true
        // For making sure that the PWA is testable from the Local dev environment
      },
      registerType: "autoUpdate",
      manifest: {
        name: "Smarter Tasks application",
        short_name: "Smarter Tasks",
        icons: [
          {
            "src": "/favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
          {
            "src": "/favicon-16x16.png",
            "type": "image/png",
            "sizes": "16x16"
          },
          {
            "src": "/favicon-32x32.png",
            "type": "image/png",
            "sizes": "32x32"
          },
          {
            "src": "/SmallTile.scale-125.png",
            "type": "image/png",
            "sizes": "125x125"
          },
          {
            "src": "/Square150x150Logo.scale-400.png",
            "type": "image/png",
            "sizes": "150x150",
            "purpose": "any maskable"
            // Icon format that ensures that your PWA icon looks great on all Android devices
          }
        ],
        theme_color: "#AAF"
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxDT0xMRUdFXFxcXEFJQ1RFIExJVEVcXFxcV0QzMDFcXFxcc3BvcnQtbmV3c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ09MTEVHRVxcXFxBSUNURSBMSVRFXFxcXFdEMzAxXFxcXHNwb3J0LW5ld3NcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0NPTExFR0UvQUlDVEUlMjBMSVRFL1dEMzAxL3Nwb3J0LW5ld3Mvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgZGV2T3B0aW9uczoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUgLy8gRm9yIG1ha2luZyBzdXJlIHRoYXQgdGhlIFBXQSBpcyB0ZXN0YWJsZSBmcm9tIHRoZSBMb2NhbCBkZXYgZW52aXJvbm1lbnRcclxuICAgICAgfSxcclxuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogXCJTbWFydGVyIFRhc2tzIGFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgc2hvcnRfbmFtZTogXCJTbWFydGVyIFRhc2tzXCIsXHJcbiAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJzcmNcIjogXCIvZmF2aWNvbi5pY29cIixcclxuICAgICAgICAgICAgXCJzaXplc1wiOiBcIjY0eDY0IDMyeDMyIDI0eDI0IDE2eDE2XCIsXHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3gtaWNvblwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInNyY1wiOiBcIi9mYXZpY29uLTE2eDE2LnBuZ1wiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgXCJzaXplc1wiOiBcIjE2eDE2XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwic3JjXCI6IFwiL2Zhdmljb24tMzJ4MzIucG5nXCIsXHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICBcInNpemVzXCI6IFwiMzJ4MzJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJzcmNcIjogXCIvU21hbGxUaWxlLnNjYWxlLTEyNS5wbmdcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIFwic2l6ZXNcIjogXCIxMjV4MTI1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwic3JjXCI6IFwiL1NxdWFyZTE1MHgxNTBMb2dvLnNjYWxlLTQwMC5wbmdcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIFwic2l6ZXNcIjogXCIxNTB4MTUwXCIsXHJcbiAgICAgICAgICAgIFwicHVycG9zZVwiOiBcImFueSBtYXNrYWJsZVwiIFxyXG4gICAgICAgICAgICAvLyBJY29uIGZvcm1hdCB0aGF0IGVuc3VyZXMgdGhhdCB5b3VyIFBXQSBpY29uIGxvb2tzIGdyZWF0IG9uIGFsbCBBbmRyb2lkIGRldmljZXNcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI0FBRicsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdULFNBQVMsb0JBQW9CO0FBQzdVLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBO0FBQUEsTUFDWDtBQUFBLE1BQ0EsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLFNBQVM7QUFBQSxZQUNULFFBQVE7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxZQUNSLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsU0FBUztBQUFBLFlBQ1QsV0FBVztBQUFBO0FBQUEsVUFFYjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
