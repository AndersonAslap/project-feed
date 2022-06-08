import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {

    const [likes, setLikes] = useState(0);

    function handleLikeComment() {
        setLikes((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/VitorSSilva230.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vitor Santos</strong>
                            <time title="04 de junho de 2022" dateTime="2022-06-04 08:13:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário" onClick={() => onDeleteComment(content)}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}