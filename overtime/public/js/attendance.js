var calculate_ot_amount = function(frm, cdt, cdn){
	var child = locals[cdt][cdn];
	var ot_amount = 0.0;
	
	
	

	if(child.overtime_in_hours &&  child.ot_rate){
		ot_amount = (child.overtime_in_hours * child.ot_rate);
		
	}
	
	frappe.model.set_value(cdt, cdn, 'ot_amount',ot_amount);
	

}


var calculate_ot_hours = function(frm, cdt, cdn){
	var child = locals[cdt][cdn];
	var ot_hours = 0.0;
	
	ot_hours = (child.overtime_in_minutes/60);
	 
	
	frappe.model.set_value(cdt, cdn, 'overtime_in_hours',ot_hours);
	

}



frappe.ui.form.on("Attendance", {
	refresh: function(frm, cdt, cdn) {
		calculate_ot_hours(frm, cdt, cdn)
		calculate_ot_amount(frm, cdt, cdn)
	
	},
overtime_in_minutes: function(frm, cdt, cdn) {
		calculate_ot_hours(frm, cdt, cdn)
	
	},

	
	

	
});