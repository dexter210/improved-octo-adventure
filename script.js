var list = ["cat","dog","fish"]

function validate()
{
  var valEle = document.body.querySelector(".valMess")
  var username = document.body.querySelector(".username").value
  var password = document.body.querySelector(".password").value
  
  if(username === "coolStudent123" && password === "password" )
  {valEle.innerHTML="Submitted"}
    else
  {valEle.innerHTML="Incorrect"}
}

document.body.querySelector(".validate").addEventListener("click", function()
   {
    validate()
    homePage()
   })

//HOME PAGE
var nav = document.body.querySelector(".nav")
var display = document.body.querySelector(".display")

function homePage()
    {
      var pages =
        [
          {
            name: "Home",
            content: "Stuff I wanna see"
          },
          {
            name: "About",
            content: "About me"
          }
        ]
      
        for(var i = 0; i < pages.length; i++)
          {
            createPage(pages[i])
          }
        function createPage(pg)
        {
          var button = document.createElement("button")
          button.addEventListener("click", function()
        {
          contentWrite(pg.content)
        })
            button.innerHTML = pg.name
            nav.appendChild(button)
          }
        function contentWrite(wd)
        { 
        display.innerHTML = wd
        }
      
      //RENDER LIST
          function renderList()
          {
            var listEle = document.body.querySelector(".list")
            listEle.innerHTML = ""

            for(var i = 0; i < list.length; i++)
            {
              var element = document.createElement("div")
              element.innerHTML = list[i]
              listEle.appendChild(element)
            }
          }
      
      // NOTE SUBMIT
      function submitNote()
          {
            var text = document.body.querySelector(".itemText").value
            if(text.length > 0)
            {
              list.push(text)
              document.body.querySelector(".itmMess").innerHTML = ""
            }
              else
            {document.body.querySelector(".itmMess").innerHTML = "Not enough Characters"}

            renderList();
          }

          document.body.querySelector(".submit").addEventListener("click", function()
            {
            submitNote()
            renderList()
            })
}