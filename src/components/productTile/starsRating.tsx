import classes from "./starsRating.module.css"

const StarsRating: React.FC<{stars: number}> = ({stars}) => {
  const starsToFill = stars / 1;
  let shouldFillHalfStar = stars % 1 > 0.4

  let starsArray:JSX.Element[] = [];
  for(let i = 1; i <= 5; i++) {
    if(i <= starsToFill) {
      starsArray.push(<div key={i} className={classes.full}></div>)
    } else {
      if(shouldFillHalfStar) {
        starsArray.push(<div key={i} className={classes.half}></div>)
        shouldFillHalfStar = false
      } else {
        starsArray.push(<div key={i} className={classes.empty}></div>)
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