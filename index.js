function superbowlWin(array) {
   let year = array.find(res => res.result === 'W')
    if (year) {
        return year.year
    }else{
        return undefined
    }

}
// superbowlWin()

