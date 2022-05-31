var qlub_excludedoptions = [ ];
// désactivation de l'accès aux sponsors
var sponsorsmgr_disabled = true ;

/*
function -
function UTILES
*/

function pages_adsdimensions() {
	return { width : 120 , paddingleft : 0 , paddingright : 6 , inpage : false } ;
}

function q_currsvcishome(){
	return q_svcishome( currsvcid ) ;
}

function q_svcishome( svcid, s ){ // recopié de q_common.js
	if ( ! s && ( ! window.spacexml || ! spacexml.sitemap ) ) return false;
	if ( ! s ) s = { items : spacexml.sitemap };
	if ( ! s.items ) return false;
	for ( var i = 0 ; i < s.items.length ; i++ ){
		if ( s.items[ i ].id && s.items[ i ].id == svcid && s.items[ i ].home && s.items[ i ].home == true ) return true;
		else {
			var b = q_svcishome( svcid, s.items[ i ] ) ;
			if ( b ) return true ;
		}
	}
	return false ;
}

function rgb2hex(val){//préciser ce que peut être val
	if ( typeof( val ) == "string" && val.indexOf("rgb") >= 0) var rgb_val = val.slice(val.indexOf('(') + 1,val.indexOf(')')).split(",");
	else var rgb_val = val;
	val = "#";
	var hexChars = "0123456789ABCDEF";
	for ( var i = 0 ; i < 3 ; i++ ) {
		var v = Math.max( 0 , Math.min( 255 , rgb_val[i] ) ) ;
		val += hexChars.charAt(v/16) + hexChars.charAt(v%16);
	}
	return val;
}

/*
function -
function ADS
*/

function qlub_noads_forie() {
	return false ;
	return ( isie() && window.q_jscssversion && q_jscssversion < 32 ) ;
}
function qlub_ads_checkadd( site, excludePagemodeCheck ) {
	excludePagemodeCheck = excludePagemodeCheck || [] ;
	function checkPageMode( mode ){
		for ( var i = 0 ; i < excludePagemodeCheck.length ; i++ ) {
			if ( mode == excludePagemodeCheck[ i ] ) return false ;
		}
		return q_pagemode() == mode ;
	}
	if ( checkPageMode( "makeweb" ) ) return false ;
	var spaceads = q_spaceparam( "ads" ) ;
	if ( spaceads && ( spaceads.enabled || ( spaceads[ site ] && spaceads[ site ].enabled ) ) ) {
		return "active" ;
		if ( spaceads.active == "false" ) return false ;
		else return "active" ;
	}
	if ( spaceads && spaceads.homeads && q_currsvcishome() ) return false ;// 2013-11-21: on teste d'abord la gestion des pubs complète, c'est elle qui l'emporte
	// if ( checkPageMode( "edit" ) ) return false ; // 2020-03-30 : on met la pub en admin
	if ( qlub_noads_forie() ) return false ;
	return "pub" ;
}
var ads_pubrandomnumber = Math.floor( Math.random() * 1000000 ) ;
function qlub_ads_JSON( site, ad ){
	var DIMS = { "top" : { width : "728", height : "90" } , "right" : { width : "120", height : "600" } , "bottom" : { width : "468", height : "60" } } ;
	return q_cloneObject( ad || {} , DIMS[ site ] ) ;
}
function qlub_cookiesads_getad( site ){// ne pas passer site pour simplement tester si on a un cookiead
	var COOKIE_KEY = web_baseurl().replace( /http:\/\/(www\.|club[0-9]*\.quomodo\.com\/)/, "" ).replace( /\/.*$/, "" ) + "-subscribedad-v1" ;
	var candidateCookiesadsID = getcookie( COOKIE_KEY ) ;
	if ( ! site && ! candidateCookiesadsID ) return null ;
	var cookiesadsIDs = ( window.ads_getcookiesads ) ? ads_getcookiesads() : null ;
	var cookiesadsID ;
	for ( var i = 0 ; i < ( cookiesadsIDs || [] ).length ; i++ ) {
		if ( cookiesadsIDs[ i ] == candidateCookiesadsID ) {
			cookiesadsID = candidateCookiesadsID ;
			break ;
		}
	}
	if ( ! cookiesadsID ) {
		if ( ! cookiesadsIDs || cookiesadsIDs.length == 0 ) return null ;
		cookiesadsID = cookiesadsIDs[ ads_pubrandomnumber % ( cookiesadsIDs.length ) ] ;
		setcookie( COOKIE_KEY, cookiesadsID, 30 ) ;
		cookiesadsID = getcookie( COOKIE_KEY ) ;
		if ( ! cookiesadsID ) return null ;//les cookies sont désactivés
	}
	if ( ! ( /\// ).test( cookiesadsID ) ) return { slots : [ qlub_ads_JSON( site, { type: "iframe", src: web_baseurl() + "__ads/bl/" + cookiesadsID + "/" + site + ".html" } ) ] } ;
	return { slots : [ qlub_ads_JSON( site, { type: "iframe", src: web_baseurl() + "__ads/shops/" + cookiesadsID + "/" + site + ".html" } ) ] } ;
}

function qlub_init_adshandler() {
	function getad( site ){
		var ad = qlub_cookiesads_getad( site ) ;
		if ( ad ) return ad ;
		var ads = ads_getad( site ) ;
		return ads[ ads_pubrandomnumber % ( ads.length ) ] ;
	}
	return {
		"top_active" : qlub_init_topads ,
		"right_active" : qlub_init_rightads ,
		"bottom_active" : qlub_init_bottomads ,
		"top_pub" : function( siteads ){
			var ad = getad( "top" ) ;
			if ( ad == "pub" ) return qlub_init_pubtopads( siteads ) ;
			return qlub_init_topads( ad ) ;
		} ,
		"right_pub" : function( siteads ){
			var ad = getad( "right" ) ;
			if ( ad == "pub" ) return qlub_init_pubrightads( siteads ) ;
			return qlub_init_rightads( ad ) ;
		} ,
		"bottom_pub" : function( siteads ){
			var ad = getad( "bottom" ) ;
			if ( ad == "pub" ) return qlub_init_pubbottomads( siteads ) ;
			return qlub_init_bottomads( ad ) ;
		}
	} ;
	return { "top_active" : qlub_init_topads , "right_active" : qlub_init_rightads , "bottom_active" : qlub_init_bottomads , "top_pub" : qlub_init_pubtopads , "right_pub" : qlub_init_pubrightads , "bottom_pub" : qlub_init_pubbottomads } ;
}

/*function qlub_init_pubtopads( siteads ) {
	var slot = ( q_currsvcishome() ) ? "Accueil_HautPage_Centre_728x90" : "Pages_HautPage_Centre_728x90";
	if ( ! window.q_ads_version ) slot = "ad_top" ;
	document.write( '<script type="text/javascript">\n' + '//<![CDATA[\n' + 'GA_googleFillSlotWithSize( "ca-pub-7347844944087363","' +  slot + '" , 728 , 90 ) ;\n' + '//]]>\n' + '</script>' ) ;
}

function qlub_init_pubbottomads( siteads ) {
	var slot = ( q_currsvcishome() ) ? "Accueil_BasPage_Centre_468x60" : "Pages_BasPage_Centre_468x60";
	if ( ! window.q_ads_version ) slot = "ad_bottom_1" ;
	document.write( '<script type="text/javascript">\n' + '//<![CDATA[\n' + 'try { GA_googleFillSlotWithSize( "ca-pub-7347844944087363","' +  slot + '" , 468 , 60 ) ; } catch( err ) {}\n' + '//]]>\n' + '</script>' ) ;
}

function qlub_init_pubrightads( siteads ) {
	if ( ! window.pages_adsdimensions ) return ;
	var x = pages_adsdimensions() ;
	var w = x.width - x.paddingleft - x.paddingright ;
	var td = document.getElementById( "qlub_ads_addright_elem" ) ;
	if ( td ) {
		td.style.width = w + "px" ;
		td.style.padding = "6px " + x.paddingright + "px 6px " + x.paddingleft + "px" ;
	}
	var slot = (  q_currsvcishome() ) ? "Accueil_HautPage_Skycraper_120x600" : "Pages_HautPage_Skycraper_120x600";
	if ( ! window.q_ads_version ) slot = "ad_right" ;
	document.write( '<script type="text/javascript">\n' + '//<![CDATA[\n' + 'try { GA_googleFillSlotWithSize( "ca-pub-7347844944087363","' +  slot + '" , 120 , 600 ) ; } catch( err ) {}\n' + '//]]>\n' + '</script>' ) ;
}

function qlub_ads_head_loadads() {
	if ( q_pagemode() == "makeweb" || q_pagemode() == "edit" ) return ;
	if ( qlub_noads_forie() ) return ;
	
	document.write( '<script type="text/javascript">\n' 
	+ '//<![CDATA[\n' 
	+ 'try { GS_googleAddAdSenseService("ca-pub-7347844944087363"); GS_googleEnableAllServices(); } catch( err ) {}\n' 
	+ '//]]>\n' 
	+ '</script>' ) ;
	document.write( '<script type="text/javascript" src="/clients/qlubads0910/ads-google-step2.js"></script>' ) ; 
	window.q_ads_version = "2.0" ;
}*/

if ( ! qlub_cookiesads_getad() && ! window.ads_server_js_loaded ) document.write( '<script type="text/javascript" src="/clients/qlubads0910/ads-server.js?d=' + ( new Date() ).getTime() + '"></script>' ) ;
