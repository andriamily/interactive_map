document.addEventListener("DOMContentLoaded", function() {
    var e = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
      , t = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Tiles © Esri &mdash; Source: Esri, USGS, NOAA"
    })
      , o = L.map("mapportfolio", {
        center: [-18.766947, 48.869107],
        zoom: 5.33,
        layers: [e],
        scrollWheelZoom: !1
    })
      , e = (window.innerWidth < 768 && o.dragging.disable(),
    o.on("click", function() {
        o.dragging.enable()
    }),
    o.on("mouseout", function() {
        window.innerWidth < 768 && o.dragging.disable()
    }),
    o.getContainer().addEventListener("touchmove", function() {
        n || r.parentNode || (document.getElementById("mapportfolio").appendChild(r),
        setTimeout( () => {
            r.parentNode && r.parentNode.removeChild(r)
        }
        , 3e3))
    }, {
        passive: !0
    }),
    {
        "Carte Standard": e,
        Satellite: t
    });
    L.control.layers(e).addTo(o),
    L.marker([-18.85, 47.52]).addTo(o).bindPopup("Ce que vous voulez montrer avec une petite description comme ça!").openPopup(),
    fetch("lim_region_b.geojson").then(e => e.json()).then(e => {
        e = L.geoJSON(e, {
            style: function(e) {
                return {
                    color: "#008000",
                    weight: 2,
                    fillColor: "#66CC66",
                    fillOpacity: .1
                }
            },
            onEachFeature: function(e, t) {
                t.bindPopup(e.properties.nom || "Descriptions  | Votre projet")
            }
        }).addTo(o).getBounds().getNorthEast(),
        e = [e.lat - .52, e.lng - 1.02];
        L.popup().setLatLng(e).setContent("Descriptions  | Votre projet").openOn(o)
    }
    ).catch(e => console.error("Erreur de chargement du GeoJSON:", e)),
    fetch("lim_region_c.geojson").then(e => e.json()).then(e => {
        L.geoJSON(e, {
            style: function(e) {
                return {
                    color: "#0000FF",
                    weight: 2,
                    fillColor: "#3399FF",
                    fillOpacity: .1
                }
            },
            onEachFeature: function(e, t) {
                t.bindPopup(e.properties.nom || "Texte de votre choix | Votre projet")
            }
        }).addTo(o)
    }
    ).catch(e => console.error("Erreur de chargement du GeoJSON:", e)),
    fetch("lim_region_a.geojson").then(e => e.json()).then(e => {
        L.geoJSON(e, {
            style: function(e) {
                return {
                    color: "#FF0000",
                    weight: 2,
                    fillColor: "#FFAA00",
                    fillOpacity: .1
                }
            },
            onEachFeature: function(e, t) {
                t.bindPopup(e.properties.nom || "Région ATSIMO ANDREFANA | Votre projet")
            }
        }).addTo(o)
    }
    ).catch(e => console.error("Erreur de chargement du GeoJSON:", e));
    let n = !(document.getElementById("mapportfolio").style.cursor = "default");
    const r = L.DomUtil.create("div", "map-tooltip");
    r.innerHTML = "Cliquez pour activer la carte.",
    r.style.position = "absolute",
    r.style.top = "50%",
    r.style.left = "50%",
    r.style.transform = "translate(-50%, -50%)",
    r.style.width = "40%",
    r.style.backgroundColor = "white",
    r.style.color = "black",
    r.style.padding = "10px",
    r.style.textAlign = "center",
    r.style.border = "1px solid black",
    r.style.borderRadius = "10px",
    r.style.zIndex = "1000",
    document.getElementById("mapportfolio").appendChild(r),
    setTimeout( () => {
        r.parentNode && !n && r.parentNode.removeChild(r)
    }
    , 3e3),
    o.on("click", function() {
        n || (n = !0,
        r.parentNode && r.parentNode.removeChild(r),
        document.getElementById("mapportfolio").style.cursor = "grab"),
        o.scrollWheelZoom.enable()
    }),
    o.getContainer().addEventListener("wheel", function() {
        n || r.parentNode || (document.getElementById("mapportfolio").appendChild(r),
        setTimeout( () => {
            r.parentNode && r.parentNode.removeChild(r)
        }
        , 3e3))
    }),
    o.on("mouseout", function() {
        o.scrollWheelZoom.disable(),
        n = !1,
        document.getElementById("mapportfolio").style.cursor = "default"
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    ["servicesmapM1", "servicesmapM2", "servicesmapM3", "intermap"].forEach(function(e) {
        var t;
        document.getElementById(e) && ((t = document.createElement("style")).innerHTML = `
                #${e} .leaflet-touch .leaflet-bar {
                    display: none !important;
                }
            `,
        document.head.appendChild(t))
    })
});
