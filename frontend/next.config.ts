import type {NextConfig} from "next";

import {PHASE_PRODUCTION_BUILD} from "next/constants";

const nextConfig =
    (phase: string): NextConfig =>
        phase === PHASE_PRODUCTION_BUILD
            ? {
                output: "export"
            }
            : {
                async redirects() {
                    return [
                        {
                            source: "/",
                            destination: "/Home",
                            permanent: true,
                        },
                    ];
                },
            };

export default nextConfig;
