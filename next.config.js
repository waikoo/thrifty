/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/?b=true",
  //       has: [
  //         {
  //           type: "query",
  //           key: "b",
  //           value: "true",
  //         },
  //       ],
  //       missing: {
  //         type: "query",
  //         key: "b",
  //         value: "undefined",
  //       },
  //     },
  //   ];
  // },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
