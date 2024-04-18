import style from './profile.module.css';
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getUser } from './_lib/getUser';
import { getUserPosts } from './_lib/getUserPosts';
import UserPosts from './_component/UserPosts';
import UserInfo from './_component/UserInfo';

type Props = {
  params: { username: string }
}

export default async function Profile({ params }: Props) {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['posts', 'recommends'], queryFn: getUser });
  await queryClient.prefetchQuery({ queryKey: ['posts', 'users', 'recommends'], queryFn: getUserPosts });

  const dehydrateState = dehydrate(queryClient);


  const user = {
    id: 'zerohch0',
    nickname: '제로초',
    image: '/5Udwvqim.jpg'
  };

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydrateState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  )
}
