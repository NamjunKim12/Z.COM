export default async function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
          <h1>홈레이아웃</h1>
        {children}
        </div>
    )
}