export default async function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
          홈페이지
          홈 레이아웃
        {children}
        </div>
    )
}