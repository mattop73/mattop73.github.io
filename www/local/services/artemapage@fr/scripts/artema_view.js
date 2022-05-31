function relaunchupdates() {
	return false ;
}
function spacetabalert() {
	return false ;
}
function qsn_beginDrag( elem , ee , wantdefault ) {
	return false ;
}
function qsn_beginDragOnly( elem , ee , wantdefault ) {
	return false ;
}
function qsn_mouseover( elem , ee , wantdefault ) {
	return false ;
}
function qsn_mouseout( elem , ee , wantdefault ) {
	return false ;
}
function qsn_notechanged( id , action , callBack ) { // id = qsn_edittarget.id
	if ( /_static/.test ( qsn_thenotes[ id ].common.notekind ) ) return ;
	if ( q_isstaticpage() ) return ;
	if ( callBack === undefined ) callBack = qsn_applynoterefresh ;
	var r = { json : qsn_thenotes[ id ] } ;
	if ( qsn_userrefreshid.length ) r.userrefresh = qsn_updateuserrefresh( id ) ;
 	r.upindex = document.mainform.upindex.value ;
	document.mainform.mission.value = ( action == "notechanged" ) ? "viewnotechanged" : action ;
	q_ajaxsubmit( r , callBack ) ;
}
