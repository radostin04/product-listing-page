import classes from "./starsRating.module.css"

const StarsRating: React.FC<{stars: number}> = ({stars}) => {
  const starsToFill = stars / 1;
  let shouldFillHalfStar = stars % 1 > 0.4

  let starsArray:JSX.Element[] = [];
  for(let i = 1; i <= 5; i++) {
    if(i <= starsToFill) {
      starsArray.push(<span key={i} className={classes.full}>&#xf000;</span>)
    } else {
      if(shouldFillHalfStar) {
        starsArray.push(<span key={i} className={classes.half}>&#xf000;</span>)
        shouldFillHalfStar = false
      } else {
        starsArray.push(<span key={i} className={classes.empty}>&#xf000;</span>)
      }
    }
  }

  return (
    <div className={classes.starsContainer}>
      {starsArray}
    </div>
  )
}

export default StarsRating;