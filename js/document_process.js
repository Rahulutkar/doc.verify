$(document).ready(function(){

	$("input[type='radio'][name='status']").change(function(){
		// alert($(this).data('document_id'));

		var filterValue = $(this).val();
		// alert(filterValue);
		$.ajax( {
		  url: '/process_document',
		  type: 'POST',
		  dataType: 'json',
		  data: {
		    status:filterValue,
		    record_id:$(this).data('document_id')
		  },success:function(data){
		    console.log(data);
			alert(data);		    
		  }
		});
	});
	
	$('#admindocuments').DataTable();
	$('#superadminusers').DataTable();
	$('#superadmindocs').DataTable();
	$('.yearpicker').yearpicker();

});