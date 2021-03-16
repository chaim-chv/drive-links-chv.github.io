function copy() {
  const txt = $('#searchTxt').val()
  const splitted = txt.split(/\/file\/d\/([^\/]+)/)[1]
  if (!splitted) {
    Swal.fire({ title: 'טעות', text: 'יש להזין קישור דרייב תקין', icon: 'error', confirmButtonText: 'אוקיי' });
    return;
  }
  const fixedlink = `https://www.googleapis.com/drive/v3/files/${splitted}?alt=media&key=AIzaSyDduW1Zbi2MIu8aMUMF6op72pJ1f0sPBi0`;
  navigator.clipboard.writeText(fixedlink).then(function() {
    Swal.fire({ title: 'בוצע', html: `<p>הקישור החדש שלך:</p><div class="box"><a target="_blank" href="${fixedlink}">${fixedlink}</a></div><p>הועתק ללוח</>`, icon: 'success', confirmButtonText: 'מעולה'})
  }, function() {
    Swal.fire({ title: 'בוצע', html: `<p>הקישור החדש שלך:</p><div class="box"><a target="_blank" href="${fixedlink}">${fixedlink}</a><br><button id="copbutt" class="button is-primary" onclick="navigator.clipboard.writeText(fixedlink)">העתק</button></div><p>שים לב, הקישור לא הועתק ללוח בצורה אוטומטית</>`, icon: 'success', confirmButtonText: 'מעולה'})
  });
}

$('#copbut').click(function(e) { copy() })
$('#searchTxt').keypress(function(e) {
    let key = e.which
    if (key === 13) {
        copy()
    }
})

$('#searchTxt').focus()