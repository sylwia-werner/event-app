import mongoose, { Document, Schema } from "mongoose";

// IMAGES
// DB: imageFilename
// TO CLIENT: imageUrl

export type LocationType = {
	city: string;
	street: string;
	// TODO: Uncomment when map api is ready
	//
	// map: {
	// 	lat: string;
	// 	lon: string;
	// }
};

export interface PostType extends Document {
	user: {
		userId: string;
		name: string;
		surname: string;
	};
	title: string;
	desc: string;
	category: string;
	peopleLimit: number;
	photo: string;
	location: LocationType;
	date: number;
	imageFilename: string;
}

const PostSchema = new mongoose.Schema({
	user: {
		id: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		surname: {
			type: String,
			required: true,
		},
	},
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	peopleLimit: {
		type: Number,
		required: true,
	},
	imageFilename: {
		type: String,
		required: false,
	},
	location: {
		city: {
			type: String,
			required: true,
		},
		street: {
			type: String,
			required: true,
		},
		// TODO: Uncomment when map api is ready
		// map: {
		// 	lat: String,
		// 	long: String,
		// 	required: true,
		// },
	},
	date: {
		type: Date,
		required: true,
	},
	pendingRequests: [
		{ type: Schema.Types.ObjectId, ref: "User", default: [] },
	],
	participants: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
	archived: {
		type: Boolean,
		default: false,
	},
});

const Post = mongoose.model<PostType>("Post", PostSchema);

export default Post;
