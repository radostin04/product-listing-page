import classes from "./loadMore.module.css"

const LoadMore: React.FC<{onClick: () => void}> = ({onClick}) => {
  return (
    <div className={classes.loadMore}>
      <button onClick={onClick}>Load more...</button>
    </div>
  )
}

export default LoadMore