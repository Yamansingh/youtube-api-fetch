let parent = document.getElementById("clips")
async function search(){
    parent.innerHTML = null
   let q = document.getElementById("text").value
   let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyDCfzsVeA8Eu6Jjx2FYikdgaj3ejw1n8qc&maxResults=20`)
   let data = await res.json()
   console.log(data)
   let {items} = data
   items  = items.filter((el)=>{
       return el.id.videoId != undefined;
   })

   
   
    items.forEach(({id:{videoId}}) => {
           console.log(videoId)
           let div = document.createElement("div")
           div.innerHTML = `<iframe width="380" height="280" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
           parent.append(div)
    });

}
 async function popular(){

    let res = await fetch("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDCfzsVeA8Eu6Jjx2FYikdgaj3ejw1n8qc&maxResults=20&q=India")
    let data = await res.json()
    console.log(data)
    let {items} = data
    items  = items.filter((el)=>{
        return el.id.videoId != undefined;
    })
    items.forEach(({id:{videoId}}) => {
        console.log(videoId)
        let div = document.createElement("div")
        div.innerHTML = `<iframe width="380" height="280" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        parent.append(div)
 });


  
 }
 popular();