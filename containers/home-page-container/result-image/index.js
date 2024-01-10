import styles from './styles.module.scss'
import { useHomePage } from '../useHomepage'
import Tag from '@/components/tag'
import Image from 'next/image'
import { Loading } from '@/components/loading'

const ResultImage = () => {
    const { isSubmitting, resultPrompt,error, image,  } = useHomePage()
console.log("err",error)
    if (error) return <p className={styles.error}>{error.message}</p>
    if (!isSubmitting && !image) return null
    return (
        <div className={styles.resultImage}>
            <div className={styles.animation}>
                {
                    isSubmitting ? (
                       <Loading/>
                    ) : (
                        <>
                            <div className={styles.content}>
                                    <p>{resultPrompt}</p>
                                    <Tag
                                        className={styles.download}
                                        title={
                                            <a href={image} target="_blank" download>
                                                Download
                                            </a>
                                        }
                                    />
                            </div>
                                <Image src={image} alt={prompt} width={512} height={512} />
                        </>
                    )
                }
            </div>
        </div>

    )
}

export default ResultImage
