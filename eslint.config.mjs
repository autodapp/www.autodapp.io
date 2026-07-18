import nextConfig from "eslint-config-next"

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".next/**", "out/**", "public/**", "node_modules/**"],
  },
]

export default eslintConfig
