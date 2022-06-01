var skeleton = {
	"id": "alpa",
	"name": "Angélique",
	"features": {
		"zen": "z40",
		"margin": "medium",
		"bg": "color",
		"header": { "h": "big", "w": "content", "bg": "color" },
		"pre_header": {  },
		"main": { "w": "content", "bg": "light" },
		"others": { "variant": "light" }
	},
	"fda": [ "inform-members:100", "friendly:90", "young:70", "lively:80", "nature:60", "feminine:50", "recreative:80", "b-community:90", "b-showroom:60", "b-friendly:100", "b-punchy:90", "b-nature:50", "b-craft:50" ],
	"properties": [ "banner-image", "bgsite-image" ],
	"zen": "z40",
	"templates": {
		"footer": "p2",
		"templates": [ "default", "default-column", "home", "prehome" ],
		"content": {
			"home": { "service": "p3", "template": "home" },
			"album": { "service": "p4", "template": "default-column" },
			"article": { "service": "p5", "template": "default-column" },
			"contact": { "service": "p6", "template": "default-column" },
			"news": { "service": "p7", "template": "default-column" },
			"organization": { "service": "p8", "template": "default-column" },
			"photos": { "service": "p9", "template": "default-column" },
			"team": { "service": "p10", "template": "default" }
		},
		"previews": {
			"preview": { "service": "p11", "template": "home" }
		}
	},
	"imgSection": {
		"site": { "title": "bg-site", "img-url": "/services/skeletons/dev/terrain.jpg" },
		"h-0": { "title": "bg-banner", "img-url": "/services/skeletons/dev/terrain.jpg" }
	},
	"footercolor": "white",
	"jcss": [
		{ "selector": ".sk-hover:hover", "style": "transition-delay: 0s; transition-duration: 0.3s; transition-property: all; transition-timing-function: ease;" },
		{ "selector": ".sk-rs:hover", "style": "color: c2-jcssbgimg; text-decoration : none;" },
		{ "selector": ".sk-rs", "style": "font-style: normal; color : bww-jcssbgimg; margin-left: 4px; font-size: 16px; vertical-align:middle;" },
		{ "selector": ".sk-contact", "style": "text-align:right; display: inline-block;" },
		{ "selector": ".sk-log", "style": "display: inline-block; vertical-align:middle; height: 18px; color : bw-jcssbg;font-weight:bold" },
		{ "selector": ".sk-log:hover", "style": "color: c2-jcssbgimg; text-decoration : none;" },
		{ "selector": ".sk-logico", "style": "color: c2-jcssbgimg; font-size: 16px; margin-right:4px;" },
		{ "selector": ".sk-s", "style": "color: bw-jcssbgimg; font-size: 24px; display: inline-block; vertical-align: middle; padding: 2px; width: 24px" },
		{ "selector": ".sk-s:hover", "style": "color: c1-jcssbgimg; text-decoration : none;" },
		{ "selector": ".sk-social", "style": "width:200px; text-align:right" },
		{ "selector": ".sk-rs2", "style": "color:bww-jcssbgimg" },
		{ "selector": ".sk-rs2:hover", "style": "color: c2-jcssbgimg; text-decoration : none;" },
		{ "selector": ".sk-log2", "style": "color: bw-jcssbgimg" },
		{ "selector": ".sk-log2:hover", "style": "color: c2-jcssbgimg; text-decoration : none;" },
		{ "selector": ".sk-contact2", "style": "color : bw-jcssbgimg" },
		{ "selector": ".sk-logico2", "style": "color : c2-jcssbgimg" },
		{ "selector": ".sk-s2", "style": "color: bw-jcssbgimg;" },
		{ "selector": ".sk-s2:hover", "style": "color: c1-jcssbgimg; text-decoration : none;" }
	],
	"bannerSections": {
		"h-0": {
			"h-0-0": { "sec": "secp-h0", "params": { "wide": false, "separator": "display:inline-block; width:1px; border-left:1px solid; border-color : bw-c1; height:15px; margin: 0 10px; vertical-align:middle" } },
			"h-0-sm": { "sec": "secp-h0", "params": { "wide": false, "separator": "display:inline-block; width:1px; border-left:1px solid; border-color : bw-c1; height:15px; margin: 0 10px; vertical-align:middle", "height": "140px" } },
			"h-0-xs": { "sec": "secp-h0", "params": { "wide": false, "separator": "display:inline-block; width:1px; border-left:1px solid; border-color : bw-c1; height:15px; margin: 0 10px; vertical-align:middle", "height": "72px", "filt-pattern": "/services/skeletons/images/light-black-dot.png" } }
		},
		"h-1": {
			"h-1-0": { "sec": "secp-nav0", "params": { "separator": "display:inline-block; border-left:1px solid; border-right:1px solid; border-color : c1@d5-c1; border-right-color: c1@l5-c1 ; height:24px; margin: 0 10px; vertical-align:middle" } },
			"h-1-xs": { "sec": "secp-nav0", "params": { "separator": "display:inline-block; border-left:1px solid; border-right:1px solid; border-color : c1@d5-c1; border-right-color: c1@l5-c1 ; height:24px; margin: 0 10px; vertical-align:middle", "height": "48px" } }
		}
	},
	"defaultBanner": {
		"id": "b0",
		"sections": { "h-0": "h-0-0", "h-1": "h-1-0" }
	},
	"banners": {
		"b0": "b0_ea",
		"b1": "b1_ea",
		"b2": "b2_ea",
		"b3": "b3_ea",
		"b0_e": "b0_ea",
		"b1_e": "b1_ea",
		"b2_e": "b2_ea",
		"b3_e": "b3_ea",
		"b0_a": "b0_ea",
		"b1_a": "b1_ea",
		"b2_a": "b2_ea",
		"b3_a": "b3_ea",
		"b0_ea": {
			"name": "Nom du club, sans logo",
			"id": "b0_ea",
			"sections": {
				"h-0": [ "h-0-0" ],
				"h-1": [ "h-1-0" ]
			},
			"content": [
				{ "kind": "wsg", "left": "30px", "width": "560px", "height": "140px", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_name" },
				{ "kind": "wsg", "top": "0px", "left": "auto", "right": "10px", "target": "h-1", "rpd": "rpdp-h0", "html": "b0_search" },
				{ "kind": "wsg", "top": "20px", "left": "auto", "right": "20px", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_social" },
				{ "kind": "wsg", "top": "auto", "bottom": "20px", "left": "auto", "right": "20px", "width": "auto", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_contact" },
				{ "kind": "menuh", "top": "0px", "height": "40px", "left": "0px", "width": "936px", "target": "h-1", "rpd": "rpdmenu-main" },
				{ "kind": "pimg", "mode": "affiliation", "top": "0px", "left": "1005px", "size": "center left", "height": "40px", "width": "100px", "target": "h-0", "url": "/services/skeletons/dev/logos/ffbb.png", "rpd": "rpdp-h0", "zindex": "50" }
			]
		},
		"b1_ea": {
			"name": "Logo avec nom du club",
			"id": "b1_ea",
			"sections": {
				"h-0": [ "h-0-0" ],
				"h-1": [ "h-1-0" ]
			},
			"content": [
				{ "kind": "pimg", "top": "40px", "left": "40px", "size": true, "width": "100px", "target": "h-0", "url": "/services/skeletons/dev/logos/fff-156x156.png", "rpd": "rpdp-h0", "zindex": "50" },
				{ "kind": "wsg", "left": "150px", "width": "440px", "height": "140px", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_name" },
				{ "kind": "wsg", "top": "0px", "left": "auto", "right": "10px", "target": "h-1", "rpd": "rpdp-h0", "html": "b0_search" },
				{ "kind": "wsg", "top": "20px", "left": "auto", "right": "20px", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_social" },
				{ "kind": "wsg", "top": "auto", "bottom": "20px", "left": "auto", "right": "20px", "width": "auto", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_contact" },
				{ "kind": "menuh", "top": "0px", "height": "40px", "left": "0px", "width": "936px", "target": "h-1", "rpd": "rpdmenu-main" },
				{ "kind": "pimg", "mode": "affiliation", "top": "0px", "left": "1005px", "size": "center left", "height": "40px", "width": "100px", "target": "h-0", "url": "/services/skeletons/dev/logos/om-110x110.png", "rpd": "rpdp-h0", "zindex": "50" }
			]
		},
		"b2_ea": {
			"name": "Logo, sans nom du club",
			"id": "b2_ea",
			"sections": {
				"h-0": [ "h-0-0" ],
				"h-1": [ "h-1-0" ]
			},
			"content": [
				{ "kind": "pimg", "top": "40px", "left": "40px", "size": true, "width": "100px", "target": "h-0", "url": "/services/skeletons/dev/logos/fff-156x156.png", "rpd": "rpdp-h0", "zindex": "50" },
				{ "kind": "wsg", "top": "0px", "left": "auto", "right": "10px", "target": "h-1", "rpd": "rpdp-h0", "html": "b0_search" },
				{ "kind": "wsg", "top": "20px", "left": "auto", "right": "20px", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_social" },
				{ "kind": "wsg", "top": "auto", "bottom": "20px", "left": "auto", "right": "20px", "width": "auto", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_contact" },
				{ "kind": "menuh", "top": "0px", "height": "40px", "left": "0px", "width": "936px", "target": "h-1", "rpd": "rpdmenu-main" },
				{ "kind": "pimg", "mode": "affiliation", "top": "0px", "left": "1005px", "size": "center left", "height": "40px", "width": "100px", "target": "h-0", "url": "/services/skeletons/dev/logos/fff-156x156.png", "rpd": "rpdp-h0", "zindex": "50" }
			]
		},
		"b3_ea": {
			"name": "Logo horizontal",
			"id": "b3_ea",
			"sections": {
				"h-0": [ "h-0-0" ],
				"h-1": [ "h-1-0" ]
			},
			"content": [
				{ "kind": "pimg", "top": "40px", "left": "40px", "size": "left center", "width": "560px", "height": "100px", "target": "h-0", "url": "/services/skeletons/dev/logos/monaco-301x83.png", "rpd": "rpdp-h0", "zindex": "50" },
				{ "kind": "wsg", "top": "0px", "left": "auto", "right": "10px", "target": "h-1", "rpd": "rpdp-h0", "html": "b0_search" },
				{ "kind": "wsg", "top": "20px", "left": "auto", "right": "20px", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_social" },
				{ "kind": "wsg", "top": "auto", "bottom": "20px", "left": "auto", "right": "20px", "width": "auto", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_contact" },
				{ "kind": "menuh", "top": "0px", "height": "40px", "left": "0px", "width": "936px", "target": "h-1", "rpd": "rpdmenu-main" },
				{ "kind": "pimg", "mode": "affiliation", "top": "0px", "left": "1005px", "size": "center left", "height": "40px", "width": "100px", "target": "h-0", "url": "/services/skeletons/dev/logos/ffbb.png", "rpd": "rpdp-h0", "zindex": "50" }
			]
		}
	},
	"defaultRender": {
		"adk-0": { "params": { "wide": false } },
		"sk-ad-top": { "sec": "secp-ad0", "params": { "wide": false, "padding-top": "8px", "padding-bottom": "8px" } },
		"sk-ad-bottom": { "sec": "secp-ad0", "params": { "wide": false, "padding-top": "8px", "padding-bottom": "8px" } },
		"sk-ad-quomodo": { "sec": "secp-ad0", "params": { "wide": false, "padding-top": "8px" } },
		"hk-0": { "sec": "secp-hk0", "params": { "wide": false } },
		"site": { "sec": "secp-bg0", "params": { "wide": true } },
		"k-xs": { "params": { "xs-margin": "10px" } },
		"k-0": { "sec": "secp-page0", "params": { "wide": false } },
		"k-1": { "sec": "secp-p0", "params": { "wide": false } },
		"ph-0": "ph-0-0",
		"ph-1": {
			"sec": "secp-ph1",
			"params": { "wide": false },
			"formats": [
				{ "outerMargin": "20px 20px 0px 20px", "innerMargin": 20.0, "ncols": 1.0 },
				false
			],
			"rpds-accept": [ "rpdp-pagetitle1", "rpdp-phtext0" ]
		},
		"p-0": {
			"sec": "secp-p0",
			"params": { "wide": false },
			"formats": [
				{ "outerMargin": 20.0, "innerMargin": 20.0, "ncols": 3.0 }
			],
			"rpds-accept": function () {
				var x = RPD.defaultFilteredSections( "p-0", [ "rpdp-side0", "rpdp-side1" ] ) ;
				if ( x[ 0 ] && typeof( x[ 0 ] ) == "string" ) {
					x.push( "rpdp-side1" ) ;
				} else {
					if ( x[ 1 ] ) x[ 1 ].push( "rpdp-side1" ) ;
					else x[ 0 ].push( "rpdp-side1" ) ;
				}
				return x ;
			}
		},
		"c-0": {
			"sec": "secp-side0",
			"params": { "wide": false, "width": "290px" },
			"formats": [
				{ "outerMargin": 20.0, "innerMargin": 20.0, "ncols": 1.0 },
				false
			],
			"rpds-accept": function () {
				return RPD.defaultFilteredSections( "c-0", [ "rpdp-side1" ] ) ;
			}
		},
		"p-1": {
			"sec": "secp-p1",
			"params": { "wide": false },
			"formats": [
				{ "outerMargin": 20.0, "innerMargin": 20.0, "ncols": 3.0 },
				false
			],
			"rpds-accept": function () {
				var x = RPD.defaultFilteredSections( "p-1", [ "rpdp-side0", "rpdp-side1" ] ) ;
				if ( x[ 0 ] && typeof( x[ 0 ] ) == "string" ) {
					x = [ "rpdp-art0", "rpdp-info0", "rpdp-card0", "rpdp-side1" ].concat( x ) ;
				} else {
					if ( x[ 1 ] ) x[ 1 ] = [ "rpdp-art0", "rpdp-info0", "rpdp-card0", "rpdp-side1" ].concat( x[ 1 ] ) ;
					else x[ 0 ] = [ "rpdp-art0", "rpdp-info0", "rpdp-card0", "rpdp-side1" ].concat( x[ 0 ] ) ;
				}
				return x ;
			}
		},
		"p-2": {
			"sec": "secp-p2",
			"params": { "wide": false },
			"formats": [
				{ "outerMargin": 20.0, "innerMargin": 20.0, "ncols": 3.0 },
				false
			],
			"rpds-accept": function () {
				var x = RPD.defaultFilteredSections( "p-2", [ "rpdp-side0", "rpdp-side1" ] ) ;
				if ( x[ 0 ] && typeof( x[ 0 ] ) == "string" ) {
					x = [ "rpdp-art0", "rpdp-info0", "rpdp-card0", "rpdp-side1" ].concat( x ) ;
				} else {
					if ( x[ 1 ] ) x[ 1 ] = [ "rpdp-art0", "rpdp-info0", "rpdp-card0", "rpdp-side1" ].concat( x[ 1 ] ) ;
					else x[ 0 ] = [ "rpdp-art0", "rpdp-info0", "rpdp-card0", "rpdp-side1" ].concat( x[ 0 ] ) ;
				}
				return x ;
			}
		},
		"f-0": {
			"sec": "secp-f0",
			"params": { "wide": false },
			"formats": [
				{ "outerMargin": 20.0, "innerMargin": 20.0, "ncols": 6.0 },
				false
			]
		}
	},
	"render": {
		"home": {
			"p-0": {
				"sec": "secp-p0",
				"params": { "wide": false, "width": "700px" },
				"formats": [
					{ "outerMargin": 20.0, "innerMargin": 20.0, "ncols": 2.0 }
				]
			}
		},
		"default-column": {
			"p-0": {
				"sec": "secp-p0",
				"params": { "wide": false, "width": "700px" },
				"formats": [
					{ "outerMargin": 20.0, "innerMargin": 20.0, "ncols": 2.0 }
				]
			}
		},
		"prehome": {
			"sk-ad-top": { "params": { "wide": true, "padding-top": "8px", "padding-bottom": "8px" } },
			"sk-ad-bottom": { "params": { "wide": true, "padding-top": "8px", "padding-bottom": "8px" } },
			"p-0": {
				"params": { "wide": false },
				"formats": [
					false,
					{ "outerMargin": 0.0, "innerMargin": 20.0, "ncols": 3.0 }
				]
			},
			"site": { "sec": "secp-prehome", "params": { "wide": true, "img-url": "/services/skeletons/dev/diagonales.jpg" } },
			"prehomek-0": { "params": { "wide": false } }
		}
	},
	"secrpds": [
		{
			"id": "secp-bg0",
			"colorset": "cs7",
			"image": "img24",
			"filter": "filt2",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		},
		{
			"id": "secp-page0",
			"colorset": "cs1",
			"image": "img0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh2"
		},
		{
			"id": "secp-hk0",
			"colorset": "cs0",
			"image": "img0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		},
		{
			"id": "secp-logo0",
			"colorset": "cs0",
			"image": "img2",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		},
		{
			"id": "secp-h0",
			"colorset": "cs11",
			"image": "img12",
			"filter": "filt2",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0",
			"params": { "height": "180px" }
		},
		{
			"id": "secp-nav0",
			"colorset": "cs7",
			"image": "img0",
			"filter": "filt0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0",
			"params": { "height": "40px" }
		},
		{
			"id": "secp-ph0",
			"colorset": "cs1",
			"image": "img0",
			"filter": "filt0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		},
		{
			"id": "secp-ph0-img",
			"colorset": "cs1",
			"image": "img4",
			"filter": "filt15",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0",
			"params": { "height": "440px" }
		},
		{
			"id": "secp-ph1",
			"colorset": "cs1",
			"image": "img0",
			"filter": "filt0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0",
			"params": { "max-height": "220px" }
		},
		{
			"id": "secp-p0",
			"colorset": "cs0",
			"image": "img0",
			"filter": "filt0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		},
		{
			"id": "secp-p1",
			"colorset": "cs1",
			"image": "img0",
			"filter": "filt0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		},
		{
			"id": "secp-p2",
			"colorset": "cs1",
			"image": "img0",
			"filter": "filt0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		},
		{
			"id": "secp-side0",
			"colorset": "cs14",
			"image": "img0",
			"filter": "filt0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		},
		{
			"id": "secp-f0",
			"colorset": "cs1",
			"image": "img0",
			"filter": "filt0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		},
		{
			"id": "secp-ad0",
			"colorset": "cs0",
			"image": "img0",
			"filter": "filt0",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		},
		{
			"id": "secp-prehome",
			"colorset": "cs7",
			"image": "img24",
			"filter": "filt2",
			"position": "pos0",
			"background": "bg0",
			"border": "bd0",
			"shadow": "sh0"
		}
	],
	"rpds": [
		{
			"id": "rpdp-h0",
			"rpd": {
				"format": "banner",
				"model": "m0",
				"typo": "t5",
				"colorset": "cs0",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh1",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "c1+p" }
			}
		},
		{
			"id": "rpdp-nav0",
			"rpd": {
				"format": "banner",
				"model": "m0",
				"typo": "t5",
				"colorset": "cs2",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "c1" }
			}
		},
		{
			"id": "rpdp-phtitle0",
			"rpd": {
				"format": "title1",
				"model": "m0",
				"typo": "t2",
				"colorset": "cs0",
				"button": "btn12",
				"align": "al0",
				"biheader": "bh1",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{
			"id": "rpdp-phtext0",
			"rpd": {
				"format": "content",
				"model": "m1",
				"typo": "t2",
				"colorset": "cs0",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh3",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{ "id": "rpdp-phtext1", "rpd": "rpdp-phtext0" },
		{
			"id": "rpdp-pagetitle0",
			"rpd": {
				"format": "title1",
				"model": "m1",
				"typo": "t3",
				"colorset": "cs0",
				"button": "btn12",
				"align": "al0",
				"biheader": "bh3",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{
			"id": "rpdp-pagetitle1",
			"rpd": {
				"format": "title1",
				"model": "m0",
				"typo": "t0",
				"colorset": "cs0",
				"button": "btn12",
				"align": "al0",
				"biheader": "bh1",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{
			"id": "rpdp-sectitle0",
			"rpd": {
				"format": "title2",
				"model": "m1",
				"typo": "t0",
				"colorset": "cs0",
				"button": "btn12",
				"align": "al0",
				"biheader": "bh1",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			},
			"desc": "c1",
			"usage": "c"
		},
		{
			"id": "rpdp-sectitle1",
			"rpd": {
				"format": "title2",
				"model": "m1",
				"typo": "t0",
				"colorset": "cs1",
				"button": "btn12",
				"align": "al0",
				"biheader": "bh1",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			},
			"desc": "c2",
			"usage": "c"
		},
		{
			"id": "rpdp-main0",
			"rpd": {
				"format": "content",
				"model": "m0",
				"typo": "t0",
				"colorset": "cs0",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" },
				"qsnDefaults": { "imgratio": 2.0 }
			}
		},
		{
			"id": "rpdp-main1",
			"rpd": {
				"format": "content",
				"model": "m1",
				"typo": "t0",
				"colorset": "cs0-main1",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			},
			"desc": "f",
			"usage": "sj"
		},
		{
			"id": "rpdp-sum0",
			"rpd": {
				"format": "content",
				"model": "m0",
				"typo": "t1",
				"colorset": "cs0",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{
			"id": "rpdp-sum1",
			"rpd": {
				"format": "content",
				"model": "m1",
				"typo": "t1",
				"colorset": "cs0-main1",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			},
			"desc": "f",
			"usage": "sj"
		},
		{
			"id": "rpdp-side0",
			"rpd": {
				"format": "content",
				"model": "m1",
				"typo": "t1",
				"colorset": "cs0",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh1",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "graylight" }
			}
		},
		{
			"id": "rpdp-side1",
			"rpd": {
				"format": "content",
				"model": "m1",
				"typo": "t1",
				"colorset": "cs14",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{
			"id": "rpdp-art0",
			"rpd": {
				"format": "content",
				"model": "m1",
				"typo": "t3",
				"colorset": "cs0-art0",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{
			"id": "rpdp-info0",
			"rpd": {
				"format": "content",
				"model": "m0",
				"typo": "t1",
				"colorset": "cs0",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out1",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{
			"id": "rpdp-card0",
			"rpd": {
				"format": "content",
				"model": "m1",
				"typo": "t0",
				"colorset": "cs0",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{
			"id": "rpdp-f0",
			"rpd": {
				"model": "m0",
				"typo": "t4",
				"colorset": "cs0",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{ "id": "rpdp-f1", "rpd": "rpdp-f0" },
		{
			"id": "rpdp-ftitle0",
			"rpd": {
				"format": "title2",
				"model": "m1",
				"typo": "t0",
				"colorset": "cs0",
				"button": "btn12",
				"align": "al0",
				"biheader": "bh1",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{ "id": "rpdp-ftitle1", "rpd": "rpdp-ftitle0" },
		{
			"id": "rpdp-shareboard",
			"rpd": {
				"format": "content",
				"model": "m1",
				"typo": "t1",
				"colorset": "cs14",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		},
		{
			"id": "rpdp-forum",
			"rpd": {
				"format": "content",
				"model": "m1",
				"typo": "t3",
				"colorset": "cs0",
				"button": "btn0",
				"align": "al0",
				"biheader": "bh0",
				"icon": "ico0",
				"outline": "out0",
				"image": "img0",
				"params": { "altbgcolor": "white" }
			}
		}
	],
	"rpdpreset": {
		"typos": {
			"t0": {
				"h4": { "case": "normal" },
				"h5": { "case": "up" }
			},
			"t1": {
				"h4": { "case": "normal" },
				"h5": { "case": "up", "textsize": "12px" }
			},
			"t2": {
				"h4": { "case": "normal" },
				"h5": { "case": "up" }
			},
			"t3": {
				"h4": { "case": "normal" },
				"h5": { "case": "up" }
			},
			"t4": {
				"h4": { "case": "normal" },
				"h5": { "case": "up" }
			},
			"t5": {
				"h4": { "case": "normal" },
				"h5": { "case": "up" }
			}
		},
		"colorsets": {
			"cs0": { "cs-h5": "graydark", "cs-third": "gbw2" },
			"cs1": { "cs-h5": "graydark", "cs-third": "gbw2" },
			"cs2": { "cs-h5": "graydark", "cs-third": "gbw2" },
			"cs14": { "cs-h5": "graydark", "cs-third": "gbw2", "cs-main": "graydark", "cs-h4": "c1" },
			"cs0-main1": { "cs-h5": "graydark", "cs-third": "gbw2", "cs-main": "graydark", "cs-h4": "c1" },
			"cs0-art0": { "cs-h5": "graydark", "cs-third": "gbw2", "cs-main": "graydark", "cs-h4": "c1" }
		}
	},
	"menurpds": [
		{
			"id": "rpdmenu-main",
			"rpd": { "model": "m0", "colorset": "cs2", "typo": "t2", "state": "sta2", "separator": "sep3", "arrow": "arr2", "format": "for1", "shadow": "sh0", "align": "al0", "altbgcolor": "c1" }
		}
	],
	"contentSections": {
		"ph-0": {
			"ph-0-0": {
				"sec": "secp-ph0",
				"formats": [
					{ "outerMargin": 0.0, "innerMargin": 20.0, "ncols": 3.0 },
					false
				],
				"default": true,
				"noimg": true
			},
			"ph-0-1": {
				"sec": "secp-ph0-img",
				"formats": [
					{ "vcenter": true, "outerMargin": 40.0, "innerMargin": 20.0, "ncols": 2.0 },
					false
				],
				"withimg": true
			}
		}
	},
	"banners_xs": {
		"b0": "b0_ea",
		"b1": "b1_ea",
		"b2": "b2_ea",
		"b3": "b2_ea",
		"b0_e": "b0_ea",
		"b1_e": "b1_ea",
		"b2_e": "b2_ea",
		"b3_e": "b2_ea",
		"b0_a": "b0_ea",
		"b1_a": "b1_ea",
		"b2_a": "b2_ea",
		"b3_a": "b2_ea",
		"b0_ea": {
			"name": "Nom du club, sans logo",
			"id": "b0_ea",
			"sections": {
				"h-0": [ "h-0-xs" ],
				"h-1": [ "h-1-xs" ]
			},
			"content": [
				{ "kind": "wsg", "left": "15px", "width": "200px", "height": "52px", "target": "h-0", "rpd": "rpdp-h0", "html": "bxs_name" },
				{ "kind": "wsg", "left": "auto", "right": "3px", "target": "h-0", "rpd": "rpdp-h0", "html": "bxs_contact" },
				{ "kind": "menuh", "height": "48px", "left": "3px", "target": "h-1", "rpd": "rpdp-nav0" },
				{ "kind": "wsg", "left": "auto", "right": "3px", "target": "h-1", "rpd": "rpdp-nav0", "html": "bxs_action" }
			]
		},
		"b1_ea": {
			"name": "Logo avec nom du club",
			"id": "b1_ea",
			"sections": {
				"h-0": [ "h-0-xs" ],
				"h-1": [ "h-1-xs" ]
			},
			"content": [
				{ "kind": "wsg", "left": "80px", "width": "140px", "height": "52px", "target": "h-0", "rpd": "rpdp-h0", "html": "bxs_name" },
				{ "kind": "wsg", "left": "auto", "right": "3px", "target": "h-0", "rpd": "rpdp-h0", "html": "bxs_contact" },
				{ "kind": "menuh", "height": "48px", "left": "3px", "target": "h-1", "rpd": "rpdp-nav0" },
				{ "kind": "wsg", "left": "auto", "right": "3px", "target": "h-1", "rpd": "rpdp-nav0", "html": "bxs_action" },
				{ "kind": "pimg", "left": "15px", "size": true, "width": "60px", "height": "38px", "target": "h-0", "url": "/services/skeletons/dev/logos/psg-92x92.png", "rpd": "rpdp-h0", "zindex": "50" }
			]
		},
		"b2_ea": {
			"name": "Logo, sans nom du club",
			"id": "b2_ea",
			"sections": {
				"h-0": [ "h-0-xs" ],
				"h-1": [ "h-1-xs" ]
			},
			"content": [
				{ "kind": "wsg", "left": "auto", "right": "3px", "target": "h-0", "rpd": "rpdp-h0", "html": "bxs_contact" },
				{ "kind": "menuh", "height": "48px", "left": "3px", "target": "h-1", "rpd": "rpdp-nav0" },
				{ "kind": "wsg", "left": "auto", "right": "3px", "target": "h-1", "rpd": "rpdp-nav0", "html": "bxs_action" },
				{ "kind": "pimg", "left": "15px", "size": "left center", "width": "200px", "height": "38px", "target": "h-0", "url": "/services/skeletons/dev/logos/monaco-301x83.png", "rpd": "rpdp-h0", "zindex": "50" }
			]
		},
		"b3_ea": "b2_ea"
	},
	"banners_sm": {
		"b0": "b0_ea",
		"b1": "b1_ea",
		"b2": "b2_ea",
		"b3": "b3_ea",
		"b0_e": "b0_ea",
		"b1_e": "b1_ea",
		"b2_e": "b2_ea",
		"b3_e": "b3_ea",
		"b0_a": "b0_ea",
		"b1_a": "b1_ea",
		"b2_a": "b2_ea",
		"b3_a": "b3_ea",
		"b0_ea": {
			"name": "Nom du club, sans logo",
			"id": "b0_ea",
			"sections": {
				"h-0": [ "h-0-sm" ],
				"h-1": [ "h-1-0" ]
			},
			"content": [
				{ "kind": "wsg", "left": "15px", "width": "450px", "height": "100px", "target": "h-0", "rpd": "rpdp-h0", "html": "bxs_name" },
				{ "kind": "wsg", "top": "0px", "left": "auto", "right": "10px", "target": "h-1", "rpd": "rpdp-h0", "html": "b0_search" },
				{ "kind": "wsg", "top": "15px", "left": "auto", "right": "15px", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_social" },
				{ "kind": "wsg", "top": "auto", "bottom": "15px", "left": "auto", "right": "15px", "width": "auto", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_contact" },
				{ "kind": "menuh", "height": "40px", "left": "0px", "target": "h-1", "rpd": "rpdp-nav0" }
			]
		},
		"b1_ea": {
			"name": "Logo avec nom du club",
			"id": "b1_ea",
			"sections": {
				"h-0": [ "h-0-sm" ],
				"h-1": [ "h-1-0" ]
			},
			"content": [
				{ "kind": "pimg", "left": "20px", "size": true, "width": "100px", "target": "h-0", "url": "/services/skeletons/dev/logos/fff-156x156.png", "rpd": "rpdp-h0", "zindex": "50" },
				{ "kind": "wsg", "left": "125px", "width": "360px", "height": "100px", "target": "h-0", "rpd": "rpdp-h0", "html": "bxs_name" },
				{ "kind": "wsg", "top": "0px", "left": "auto", "right": "10px", "target": "h-1", "rpd": "rpdp-h0", "html": "b0_search" },
				{ "kind": "wsg", "top": "15px", "left": "auto", "right": "15px", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_social" },
				{ "kind": "wsg", "top": "auto", "bottom": "15px", "left": "auto", "right": "15px", "width": "auto", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_contact" },
				{ "kind": "menuh", "height": "40px", "left": "0px", "target": "h-1", "rpd": "rpdp-nav0" }
			]
		},
		"b2_ea": {
			"name": "Logo, sans nom du club",
			"id": "b2_ea",
			"sections": {
				"h-0": [ "h-0-sm" ],
				"h-1": [ "h-1-0" ]
			},
			"content": [
				{ "kind": "pimg", "left": "20px", "size": "center left", "width": "140px", "height": "100px", "target": "h-0", "url": "/services/skeletons/dev/logos/fff-156x156.png", "rpd": "rpdp-h0", "zindex": "50" },
				{ "kind": "wsg", "top": "0px", "left": "auto", "right": "10px", "target": "h-1", "rpd": "rpdp-h0", "html": "b0_search" },
				{ "kind": "wsg", "top": "15px", "left": "auto", "right": "15px", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_social" },
				{ "kind": "wsg", "top": "auto", "bottom": "15px", "left": "auto", "right": "15px", "width": "auto", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_contact" },
				{ "kind": "menuh", "height": "40px", "left": "0px", "target": "h-1", "rpd": "rpdp-nav0" }
			]
		},
		"b3_ea": {
			"name": "Logo horizontal",
			"id": "b3_ea",
			"sections": {
				"h-0": [ "h-0-sm" ],
				"h-1": [ "h-1-0" ]
			},
			"content": [
				{ "kind": "pimg", "left": "15px", "size": "left center", "width": "450px", "height": "80px", "target": "h-0", "url": "/services/skeletons/dev/logos/monaco-301x83.png", "rpd": "rpdp-h0", "zindex": "50" },
				{ "kind": "wsg", "top": "0px", "left": "auto", "right": "10px", "target": "h-1", "rpd": "rpdp-h0", "html": "b0_search" },
				{ "kind": "wsg", "top": "15px", "left": "auto", "right": "15px", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_social" },
				{ "kind": "wsg", "top": "auto", "bottom": "15px", "left": "auto", "right": "15px", "width": "auto", "target": "h-0", "rpd": "rpdp-h0", "html": "b0_contact" },
				{ "kind": "menuh", "height": "40px", "left": "0px", "target": "h-1", "rpd": "rpdp-nav0" }
			]
		}
	}
} ;