#Buổi 1
* Tiêu chuẩn BEM(Block-Element-Modifier)
-- Quy ước đặt tên:
.block {}   /* Block */
.block__element {}  /* Element */
.block--modifier {}  /* Modifier */

*W3school
https://www.w3schools.com/html/html_exercises.asp

#Buổi 2
*Hướng dẫn cách sử dụng grid layout chia dòng cột
.grid {
	.grid__row {
		.grid__column-2{
		}
		.grid__column-10{
			.grid__row {
				....
			}
		}
	}
}
*Dựng base folder -> xong
- base css cho Project -> xong
- tạo font -> xong font-family: 'DM Sans', sans-serif;	
- tạo color chung
- reset css
- font-aw
*Clone project git hub -> xong
*Create footer, header để ví dụ cho việc làm phần chung


-- Một số thủ thuật căn giữa item
- Nếu đối tượng là thẻ p, i, ...
text-align: center;
line-height: chiều cao của đối tượng;

position: absolute;
transform: translateY(-50%);
top: 50%;