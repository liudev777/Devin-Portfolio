import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'


export default ({ mode }) => {
    // process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    // console.log("Route Endpoint: ", process.VITE_ROUTE_ENDPOINT)
    return defineConfig({
        plugins: [react()],
        base: "/"
    });
}