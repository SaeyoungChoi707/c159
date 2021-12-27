AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },

  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    const id = this.el.getAttribute("id");
    const placesId = ["aot", "blue_exorcist", "dn", "drrr", "mdzs"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
      });
    }
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave",()=>{
      const {selectedItemId}=this.data
      if (selectedItemId){
        const el = document.querySelector(`#${selectedItemId}`)
        const id = el.getAttribute("id")
        if (id==selectedItemId){
          el.setAttribute("material",{
          })
        }
      }
    })
  },
  handleMouseClickEvents: function(){
    if(selectedItemId) {
      fadeBgEl.setAttribute("visible",true)
      fadeBgEl.setAttribute("info-banner",{
        itemId : selectedItemId
      })
      titlel.setAttribute("visible",false)
      cursorel.setAttribute("position",{x:0,y:0,z:-1})
      cursorel.setAttribute("geometry",{
        radiusInner:0.03,
        radiusOuter:0.04
      })
    } else{
      fadeBgEl.setAttribute("visible",false)
      titlel.setAttribute("visible",true)
      cursorel.setAttribute("position",{
        x:0,y:0,z:-3
      })
      cursorel.setAttribute("geometry",{
        radiusInner:0.08,
        radiusOuter:0.12
      })
    }
  },
  update: function(){
    const fadeBgEl = document.querySelector("#fadeBg")
    const c = document.querySelector("#c")
    c = fadeBgEl.children
      if(c.length>0){
        var i
        for (i=0;i<=c.length;i++) {
          fadeBgEl.removeChild(c[i])
        }
    }
      else {
        this.handleMouseClickEvents()
      }
  } 
});
