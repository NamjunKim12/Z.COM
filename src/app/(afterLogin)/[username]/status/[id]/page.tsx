import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from './singlePost.module.css';
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import Comments from "./_component/Comments";
import SinglePost from "./_component/SinglePost";
import { getSinglePost } from "./_lib/getSinglePost";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getComments } from "./_lib/getComments";

type Props = {
  params: { id: string }
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['posts', 'id'], queryFn: getSinglePost });
  await queryClient.prefetchQuery({ queryKey: ['posts', id, 'comments'], queryFn: getComments });
  const dehydrateState = dehydrate(queryClient);

  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydrateState}>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id} />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  )
}