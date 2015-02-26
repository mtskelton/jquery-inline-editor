$.fn.inlineEditor = function() {
	$(this).each(function() {
		var $e = $(this);
		
		$e.html('<span class="display" style="cursor: pointer;">' + $e.html() + '</span>');
		$e.prepend('<input type="text" class="edit" style="display: none;"/>');
		$e.append('<span class="spinner" style="display: none;"><i class="fa fa-spin fa-spinner"></i> </span>');
		
		$e.find('.display:first').click(function() {
			$e.find('.edit').show();
			$e.find('.edit').focus();
			$e.find('.edit-btn, .display').hide();
			$e.find('.edit').val($e.find('.display:first').text());
		});
		
		$e.find('.edit:first').change(function() {
			if($e.data('current-save-action') !== undefined && $e.data('current-save-action') !== null)
				return;
			
			$e.find('.spinner').show();
			var fieldName = $e.attr('data-field-name');
			var data = {};
			data[fieldName] = $e.find('.edit').val();
			$.ajax({
				url: $e.attr('data-url'),
				data: data,
				type: 'POST',
				dataType: 'json',
				success: function() {
					$e.find('.spinner').hide();
					$e.find('.edit').hide();
					$e.find('.display').show();
					$e.find('.display').html($e.find('.edit').val());
				}, error: function() {
					$e.data('current-save-action', setTimeout(function() {
						$e.data('current-save-action', null);
						$e.find('.edit:first').trigger('change');
					}, 5000));
				}
			})
		});		
	});
}