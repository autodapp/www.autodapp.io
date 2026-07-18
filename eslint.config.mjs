import nextConfig from "eslint-config-next"

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".next/**", "public/**", "node_modules/**"],
  },
]

export default eslintConfig
