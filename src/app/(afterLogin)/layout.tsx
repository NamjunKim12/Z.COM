export default async function AfterLoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
        <h1>에프터 로그인 레이아웃</h1>
        {children}
        </div>
    )
}