import { ReactNode } from "react";
import styles from '@/app/(beforeLogin)/_component/main.module.css'

type Props = {
    children: ReactNode;
    modal : ReactNode;
};


export default async function HomeLayout({children, modal}: Props){
    return (
        // 로그인 이전시 보여줄 루트 레이아웃
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    )
}