
cur_frm.cscript.custom_refresh = function(doc) {
	
    // use the __islocal value of doc, to check if the doc is saved or not
    cur_frm.set_df_property("overtime_in_hours", "read_only", doc.__islocal ? 0 : 1);
	cur_frm.set_df_property("ot_amount", "read_only", doc.__islocal ? 0 : 1);
}
	



