export const frameMotion = {
    in : "in",
    out : "out",
    pageTransition : {
        in : {
            opacity : 1,

        },
        out : {
            opacity : 0,

        }
    },

    durationTransition : {
      /*  duration : .2,
        type : "tween",
        stiffness : 30
     */
         type : "tween",
         ease : "anticipate",
         duration : .5
    }
}
