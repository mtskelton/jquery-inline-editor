# jquery-inline-editor

Provides a very simple inline editor component.  When applied to a normal text field, the user can then click on the field and edit it.  The resulting change is then sent via AJAX to the URL specified so your backend can handle it accordingly.

An example:

```
<span class="editable" data-url="http://localhost/change-field" data-field-name="field">Value</span>

<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="inline-editor.min.js">
<script type="text/javascript">
$(function() {
  $(".editable").inlineEditor();
});
</script>
```

In this example when the field value is changed, the result will be sent to ```http://localhost/change-field``` with the parameters ```field=value``` where value is whatever the user has entered.
