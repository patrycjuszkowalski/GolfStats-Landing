export default function Logo({ small = false }: { small?: boolean }) {
  return (
    <img
      src="/logo_golfstats.webp"
      alt="GolfStats"
      width={180}
      height={48}
      className={small ? 'h-8 w-auto rounded-lg' : 'h-12 w-auto rounded-xl'}
    />
  )
}
