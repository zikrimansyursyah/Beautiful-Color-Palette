let database = [];

class DataColor {
	constructor(id, src_img, nama, clr1, clr2, clr3, clr4, creator, desc) {
		this.id = id;
		this.src_img = src_img;
		this.nama = nama;
		this.clr1 = clr1;
		this.clr2 = clr2;
		this.clr3 = clr3;
		this.clr4 = clr4;
		this.creator = creator;
		this.desc = desc;
	}
}

function addData(id, src_img, nama, clr1, clr2, clr3, clr4, creator, desc) {
	let colors = new DataColor(
		id,
		src_img,
		nama,
		clr1,
		clr2,
		clr3,
		clr4,
		creator,
		desc
	);
	database.push(colors);
}

addData(
	1,
	"https://i.ibb.co/XWVySK6/photo-1557672172-298e090bd0f1-ixlib-rb-1-2.jpg",
	"Byron",
	"#7DE1E9",
	"#FCBEE2",
	"#EC85C9",
	"#C05EAA",
	"Venuela Zahid",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	2,
	"https://i.ibb.co/V2k2GQw/photo-1567095716798-1d95d8f4c479-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Sunday",
	"#F3C5E7",
	"#FCB5D5",
	"#96C8EB",
	"#CA96DE",
	"Immanuel Brian",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	3,
	"https://i.ibb.co/n0W6Yys/photo-1518640467707-6811f4a6ab73-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Morrocan",
	"#D5D0C8",
	"#51ADAA",
	"#016678",
	"#001B20",
	"Riska Melyana Sahid",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	4,
	"https://i.ibb.co/tqp9Kp5/photo-1564089957880-517edea1afc5-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Fuchsia",
	"#EEE4E8",
	"#5EBEE3",
	"#5EBEE3",
	"#F78379",
	"Jacob",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	5,
	"https://i.ibb.co/s9nNsxs/photo-1594145070100-c771df5152fe-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Pearl",
	"#FCFAFB",
	"#5DB3F9",
	"#F9D2F6",
	"#F7A8EB",
	"Harper",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	6,
	"https://i.ibb.co/mhQyF3Q/photo-1554189097-ffe88e998a2b-ixlib-rb-1-2.jpg",
	"Juniper",
	"#FAE0E0",
	"#F9CCCB",
	"#FAB6B5",
	"#85CBCA",
	"Jack Aiden",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	7,
	"https://i.ibb.co/rbPHLMJ/photo-1559762717-99c81ac85459-ixlib-rb-1-2.jpg",
	"Fitzgerald",
	"#FBE9A9",
	"#2AD9EE",
	"#07B4E3",
	"#0380CF",
	"Wyatt Luna",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	8,
	"https://i.ibb.co/809wRFr/photo-1605478185737-99ae313e940c-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Sky Blue",
	"#E0EFF2",
	"#7BE5F3",
	"#23D5F0",
	"#41A4E2",
	"Asher Jayden",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	9,
	"https://i.ibb.co/5rFcDkS/photo-1603665230556-b5bb38f82591-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Cormac",
	"#E3EDF5",
	"#BFD9EB",
	"#F3DCE6",
	"#FE8FA0",
	"Leo Lincoln",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	10,
	"https://i.ibb.co/p27rdzZ/photo-1606766960447-b3487fe8df03-ixlib-rb-1-2.jpg",
	"Oceanis",
	"#C8DBEC",
	"#559ACB",
	"#4497CA",
	"#0683C1",
	"Hudson Mila",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	11,
	"https://i.ibb.co/Lz63S6g/photo-1600196302476-1790ba2334f5-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Mabel",
	"#CDC7CE",
	"#7F88C5",
	"#CA78B9",
	"#535BB6",
	"Scarlett Layla",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	12,
	"https://i.ibb.co/rfVgkZd/photo-1602536100338-c7762727ddb7-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Ophelia",
	"#ECE2D9",
	"#D2C4BE",
	"#EFB47C",
	"#71513B",
	"Maverick Parker",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	13,
	"https://i.ibb.co/vd76smK/photo-1608501712351-a4ca8dc996fb-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Minerva",
	"#D4D2DF",
	"#C7BDD9",
	"#C496CC",
	"#B57EBF",
	"Cameron Ellie",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	14,
	"https://i.ibb.co/p161Wmm/photo-1601925059835-3c6655cdb1f3-ixlib-rb-1-2.jpg",
	"Shadyoon",
	"#FAC2B1",
	"#F8B297",
	"#F29069",
	"#DD7747",
	"Caleb Hazel",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	15,
	"https://i.ibb.co/JHDHNFR/photo-1603665143615-4b7cafb5366b-ixlib-rb-1-2.jpg",
	"Willow",
	"#DFE8F7",
	"#F6DAE9",
	"#888FF5",
	"#FC93AB",
	"Miles Nova",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	16,
	"https://i.ibb.co/pwQk5By/photo-1603050785682-e8304e078c39-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Stormi",
	"#D9DCDB",
	"#F56B90",
	"#5A97D0",
	"#45323C",
	"Colton Easton",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	17,
	"https://i.ibb.co/2Zb9cmM/photo-1602536052359-ef94c21c5948-ixlib-rb-1-2.jpg",
	"Ione",
	"#FBF3EA",
	"#EAB46D",
	"#C05EAA",
	"#75563C",
	"Axel Stella",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	18,
	"https://i.ibb.co/rprz3Wk/photo-1600196372383-f7f79e1f9bd7-ixlib-rb-1-2.jpg",
	"Everly",
	"#EBB8A6",
	"#F09F71",
	"#F9946E",
	"#DA472C",
	"Everly Addison",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	19,
	"https://i.ibb.co/pyd6cs1/photo-1612107591665-4a6b406f6b03-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Diezel",
	"#F2F0F3",
	"#D5EEF4",
	"#12ACC3",
	"#FC8B73",
	"Isla Roman",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	20,
	"https://i.ibb.co/W25vZ3t/photo-1610917615921-9b800769efe6-ixlib-rb-1-2.jpg",
	"Everest",
	"#D3D4D3",
	"#CBBC9A",
	"#52C5CD",
	"#03A5C9",
	"Sawyer Rowan",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

addData(
	20,
	"https://i.ibb.co/yXv3s1c/photo-1600627255439-a41d2a40b3da-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg",
	"Sparrow",
	"#95B0C6",
	"#458AB8",
	"#25221D",
	"#080B06",
	"Jack Sparrow",
	"Who said OGs can't learn new tricks? Featuring a white leather upper, black outsole and gold eyestays, the Air Jordan 12 'Royalty' may remind you of a certain colourway that still drives in these streets. But, as its name suggests, this AJ 12 is elevated by luxurious touches. Golden Jumpman mudguard accents, tongue embroidery and insole graphics give this beloved style a premium treatment."
);

// content Section
const card = document.getElementById("content-section");

card.innerHTML = tampil();

function tampil() {
	let dataColors = "";
	for (let i = 0; i < database.length; i++) {
		dataColors += `<!-- card ${database[i].id} -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            <div class="card">
                <img src="${
									database[i].src_img
								}" class="card-img"alt="Fancy Color">
                <div class="card-img-overlay">
                    <p class="card-title text-white">${
											database[i].nama
										} Color</p>
                </div>
                <div class="card-details">
                    <div class="row">
                        <div class="col">
                        <a onclick="seeDesc('${database[i].clr1}','${
			database[i].clr2
		}','${database[i].clr3}','${database[i].clr4}','${database[i].nama}','${
			database[i].creator
		}','${renameDesc(database[i].desc)}','${
			database[i].src_img
		}')" href="#" data-bs-toggle="modal" data-bs-target="#contentModal">
                            <img src="${
															database[i].src_img
														}" class="card-img" alt="Fancy Color">
                        </a>
                            <div class="card-img-overlay">
                                <p class="card-title text-white">${
																	database[i].nama
																} Color</p>
                            </div>
                        </div>
                        <div class="col ps-0 pt-1">
                            <div class="colors">
                                <div class="mb-3">
                                    <div class="clr" style="background-color: ${
																			database[i].clr1
																		};">
                                    </div>
                                    <div class="input-group flex-nowrap">
                                        <input type="text" class="form-control" value="${
																					database[i].clr1
																				}" aria-label="Color" disabled readonly>
                                        <span class="input-group-text" id="addon-wrapping"><button type="button" onclick="copyColor('${
																					database[i].clr1
																				}')"><i class="fi fi-rr-copy"></i></button></span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="clr" style="background-color: ${
																			database[i].clr2
																		};">
                                    </div>
                                    <div class="input-group flex-nowrap">
                                        <input type="text" class="form-control" value="${
																					database[i].clr2
																				}" aria-label="Color" disabled readonly>
                                        <span class="input-group-text" id="addon-wrapping"><button type="button" onclick="copyColor('${
																					database[i].clr2
																				}')"><i class="fi fi-rr-copy"></i></button></span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="clr" style="background-color: ${
																			database[i].clr3
																		};">
                                    </div>
                                    <div class="input-group flex-nowrap">
                                        <input type="text" class="form-control" value="${
																					database[i].clr3
																				}" aria-label="Color" disabled readonly>
                                        <span class="input-group-text" id="addon-wrapping"><button type="button" onclick="copyColor('${
																					database[i].clr3
																				}')"><i class="fi fi-rr-copy"></i></button></span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="clr" style="background-color: ${
																			database[i].clr4
																		};">
                                    </div>
                                    <div class="input-group flex-nowrap">
                                        <input type="text" class="form-control" value="${
																					database[i].clr4
																				}" aria-label="Color" disabled readonly>
                                        <span class="input-group-text" id="addon-wrapping"><button type="button" onclick="copyColor('${
																					database[i].clr4
																				}')"><i class="fi fi-rr-copy"></i></button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-group d-flex mt-3">
                        <button type="button" class="btn" id="downloadBtn">Download Pallete</button>
                        <a id="seeBtn" onclick="seeDesc('${
													database[i].clr1
												}','${database[i].clr2}','${database[i].clr3}','${
			database[i].clr4
		}','${database[i].nama}','${database[i].creator}','${renameDesc(
			database[i].desc
		)}','${
			database[i].src_img
		}')" class="btn" href="#" data-bs-toggle="modal" data-bs-target="#contentModal" role="button">See Details</a>
                    </div>
                </div>
            </div>
        </div>`;
	}
	return dataColors;
}

function renameDesc(string) {
	let baru = string.replace(/'/g, "\\'");
	return baru;
}

function copyColor(color) {
	navigator.clipboard.writeText(color);
	swal("Yeah you did it!", `Color ${color} has copied to Clipboard`);
}

function seeDesc(clr1, clr2, clr3, clr4, nama, creator, desc, img) {
	const modal = document.getElementById("modal-content");
	modal.innerHTML = `<div class="modal-header">
            <h5 class="modal-title ms-2"><a href="#" data-bs-dismiss="modal">Superb Colors</a> &#92; <span>${nama} Color</span></h5>
            <button type="button" class="btn-close me-2" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="content d-flex p-3">
                <div class="image-content">
                    <img src="${img}" alt="gambar">
                </div>
                <div class="desc-content ms-5">
                    <h1>${nama} Color</h1>
                    <h4 class="mb-4">By ${creator}</h4>
                    <p><b>Color Palette</b> :</p>
                    <div class="palette d-flex mb-4">
                        <a onclick="copyColor('${clr1}')" title="Copy Color" style="background-color: ${clr1};">${clr1}</a>
                        <a onclick="copyColor('${clr2}')" title="Copy Color" style="background-color: ${clr2};">${clr2}</a>
                        <a onclick="copyColor('${clr3}')" title="Copy Color" style="background-color: ${clr3};">${clr3}</a>
                        <a onclick="copyColor('${clr4}')" title="Copy Color" style="background-color: ${clr4};">${clr4}</a>
                    </div>
                    <button id="downloadBtn" class="mb-4">Download Palette </button>
                    <a href="#" class="share-palette" title="Share to Social Media"><i class="fi fi-rr-share"></i></a>
                    <p><b>Description</b> :</p>
                    <p id="deskripsi">${desc}
                    </p>
                </div>
            </div>
        </div>`;
}