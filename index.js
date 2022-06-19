function checkMarks(e) { return !(e <= 0) }
function calMark() {
    var inputName = Number(document.getElementById("doiTuong").value)
    var inputLocation = Number(document.getElementById("khuVuc").value)
    var benchmark = document.getElementById("inputBenchmark").value
    var score1 = Number(document.getElementById("inputScore1").value)
    var score2 = Number(document.getElementById("inputScore2").value)
    var score3 = Number(document.getElementById("inputScore3").value)
    if (score1 > 0 && score2 > 0 && score3 > 0) {
        var totalScore = score1 + score2 + score3 + inputLocation + inputName;
        document.getElementById("ketQua").innerHTML = totalScore >= benchmark ? "Bạn đã đậu. Tổng điểm: " + totalScore : "Bạn đã rớt. Tổng điểm: " + totalScore
    }
    else {
        document.getElementById("ketQua").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    }
};
document.getElementById("hamB1").onclick = calMark;
function calcElecBill() {
    const kw_1 = 500, kw_2 = 650, kw_3 = 850, kw_4 = 1100, kw_5 = 1300;
    var name = document.getElementById("inputName").value
    var numberKW = Number(document.getElementById("inputKW").value),
        totalMoney = 0;
    if (0 < numberKW && numberKW <= 50) {
        totalMoney = numberKW * kw_1
    } else {
        if (numberKW > 50 && numberKW <= 100) {
            totalMoney = 50 * kw_1 + (numberKW - 50) * kw_2
        } else {
            if (numberKW > 100 && numberKW <= 200) {
                totalMoney = 50 * kw_1 + 50 * kw_2 + (numberKW - 100) * kw_3
            } else {
                if (numberKW > 200 && numberKW <= 350) {
                    totalMoney = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (numberKW - 200) * kw_4
                } else {
                    if (numberKW > 350) {
                        totalMoney = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (numberKW - 350) * kw_5
                    }
                }
            }
        }
    }
    document.getElementById("ketquaB2").innerHTML = " Tiền điện Tháng này của " + name + " là : " + totalMoney
}
document.getElementById("hamB2").onclick = calcElecBill
